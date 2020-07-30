## Running the app

- This is a simple React app with a simple Express server. The Express server's sole purpose is to handle the `GET` request to `save_hits?priceDate=<date>&priceClick=<price>&previousPriceClick=<previousPriceClick>`.
  - Whenever you click a row, and the request is made to `/save_hits`, the endpoint will return all the query params that it received, so that you can view `priceDate`, `priceClick`, and `previousPriceClick`;

## Implementation Notes

- A quick `npm audit` will reveal that some of these packages have vulnerabilities. For the sake of time, I have left them behind. Given more time, and the guarantee that this was going to a production environment, I would, of course, ensure that none of the packages we're using compromise our data.
- It's likely that Express may be a bit heavy handed for an app with only one endpoint. That said, I can move faster with Express than I can trying to roll a server with something like the `http` module. Plus, this sets us up for furture growth, with not that much of a space cost upfront.
- I agree that the word "datum" is a bit on the pretentious side, but I found myself using the word "data" over and over again and, well, here we are.
- Since this is using the `table` element, it's not the prettiest design on a small mobile device. That said, provided more time, I could implement this in such a way as to look presentable on small mobile breakpoints.
- Given more time, there are some feature I'd love to implement:
  - Pagination, so that we're not looking at one single massive table.
  - The ability to sort the prices by date by clicking on table headers (e.g. clicking the "Date" header should sort the list in either ascending or descending order)
  - A more robust mobile view on small devices
