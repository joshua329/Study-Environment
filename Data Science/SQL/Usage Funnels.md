# Usage Funnels

Vistors to Codecademy's website follow a simple workflow:

1. Browse items available for sale
2. Click an icon to begin the checkout process
3. Enter payment information to complete their purchase

Not all users who browse on the website will find something that they like enough to checkout, and not all users who begin the checkout process will ginish entering their payment information to make a purchase.

This type of multi-step process where some users leave at each step is called a *funnel*.

```
 SELECT ROUND(
   100.0 * COUNT(DISTINCT c.user_id) /
   COUNT(DISTINCT b.user_id)
 ) AS browse_to_checkout_percent,
 ROUND(
   100.0 * COUNT(DISTINCT p.user_id) /
   COUNT(DISTINCT c.user_id)
 ) AS checkout_to_purchase_percent
 FROM browse b
 LEFT JOIN checkout c
 	ON b.user_id = c.user_id
 LEFT JOIN purchase p
 	ON c.user_id = p.user_id;
```
