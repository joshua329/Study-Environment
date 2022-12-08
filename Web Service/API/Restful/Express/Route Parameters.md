# Route Parameters

When building interfacaes with Express, we will run into the pattern of expecting certain information in a requested URL and using that information to identify the data that is being requested.

```
app.get('/sorcerers/:sorcererName', (req, res, next) => {
  const sorcerer = Sorcerers[req.params.sorcererName];
  res.send(sorcerer.info);
});
 
app.get('/sorcerers/:sorcererName/spellhistory', (req, res, next) => {
  const sorcerer = Sorcerers[req.params.sorcererName];
  const spellHistory = Spells[sorcerer.id].history;
  res.send(spellHistory);
});
```

In the above code we need to extract the request parameter `:sorcererName` from the url in both instances, and end up duplicating the necessary code so that it appears in bothh routes. Whne working with routes that require parameters, we might find ourselves in a position where multiple different routes require the same parameter and use it to identify the same piece of data.

While writing this duplicate code will get this job done, copy-and-pasting functionality does leave a bitter taste in the mouth of the principled developer.  We should investifate if there is a better way to accomplish this.

## router.param()

Express, luckily, is mindful of the pain-point of replicated parameter-matching code and has a method specifically for this issue. When a specific parameter is present in a route, we can write a function that will perform the necessary lookup and attach it to the `req` object in subsequent middleware that is run.

```
app.param('spellId', (req, res, next, id) => {
  let spellId = Number(id);
    try {
      const found = SpellBook.find((spell) => {
        return spellId === spell.id;
      })
      if (found) {
        req.spell = found;
        next();
      } else {
        next(new Error('Your magic spell was not found in any of our tomes'));
      };
    } catch (err) {
      next(err)
    }
});
```

In the code above we intercept any request to a route handler with the `:spellId` parameter. Note that in the `app.param` function signature, `'spellId'` does not have the leading `:`. The actual ID will be passed in as the fourth argument, `id` in this case, to the `app.param` callback function when a request arrives.

We look up the spell in our `SpellBook` array using the `.find()` method. If `SpellBook` does not exist, or some other error is thrown in this process, we pass the error to the following middleware (hopefully we’ve written some error-handling middleware, or included some externally-sourced error-handling middleware). If the `spell` exists in `SpellBook`, the `.find()` method will store the spell in `found`, and we attach it as a property of the request object (so future routes can reference it via `req.spell`). If the requested `spell` does not exist, `.find()` will store `undefined` in `found`, and we let future middlewares know there was an error with the request by creating a new `Error` object and passing it to `next()`.

Note that inside an `app.param` callback, you should use the fourth argument as the parameter’s value, not a key from the `req.params` object.

## Merge Parameters

Complexity is all around us. Buildings are made from bricks and many droplets of water make a cloud. When we want to create something completx in sofrware, we model out our base components and use *composition* to create these relationships.

When we're building. web endpoints, we might want to access some property of a complex object. In order to do this in Express, we can design a nested router. This would be a router that is invoked within another router. In order to pass. parameters the parent router has access to, we ppass a special configuration object when defining the router.

```
const sorcererRouter = express.Router();
const familiarRouter = express.Router({mergeParams: true});
 
sorcererRouter.use('/:sorcererId/familiars', familiarRouter);
 
sorcererRouter.get('/', (req, res, next) => {
  res.status(200).send(Sorcerers);
  next();
});
 
sorcererRouter.param('sorcererId', (req, res, next, id) => {
  const sorcerer = getSorcererById(id);   
  req.sorcerer = sorcerer;
  next();
});
 
familiarRouter.get('/', (req, res, next) => {
  res.status(200).send(`Sorcerer ${req.sorcerer} has familiars ${getFamiliars(sorcerer)}`);
});
 
app.use('/sorcerer', sorcererRouter);
```

In the code above we define two endpoints: `/sorcerer` and `/sorcerer/:sorcererId/familiars`. The familiars are nested into the sorcerer endpoint -- indicating the relationship that a sorcerer has multiple familiars. Take careful note of the `{mergeParameters: true}` argument that gets passed when creating the `familiarRouter`. This argument tells Express that the `familiarRouter` should have access to parents passed into its *parent* router, that is, the `sorcererRouter`. We then tell express that the path for the `familiarRouter` is the same as the path for the  `sorcererRouter `with the additional path `/:sorcererId/familiars `. We then can create a family of routes (a router) built by appennding routes to `familiarRouter `'s base: `/sorcerer/:sorcererId/familiars`.
