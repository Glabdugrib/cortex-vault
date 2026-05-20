
## TUNE

| Campo                    | Dato                                    | Note                   |
| ------------------------ | --------------------------------------- | ---------------------- |
| Periodo                  | `start_date` & `end_date`               |                        |
| Dimensione tempo         | `Stat.date`, `Stat.month` o `Stat.Year` |                        |
| Affiliato                | `Affiliate.company`                     |                        |
| Advertiser               | `Advertiser.company`                    |                        |
| Campagna                 | `Offer.name`                            |                        |
| Creatività               | `OfferFile.display`                     |                        |
| Volume                   | -                                       | Da DB Sendgoon         |
| DB Source                | `Stat.source`                           | Assente in alcuni casi |
| Impressions              | `Stat.impressions`                      |                        |
| Clicks                   | `Stat.clicks`                           |                        |
| Conversions              | `Stat.conversions`                      |                        |
| Goals                    | `Goal.name`                             |                        |
| Revenue                  | `Stat.revenue`                          |                        |
| Payout                   | `Stat.payout`                           |                        |
| Open Rate (OR)           | `impressions / volume`                  |                        |
| Click Through Rate (CTR) | `clicks / impressions`                  |                        |
| Conversion Rate (CR)     | `conversions / clicks`                  |                        |
| Goals CR                 | `conversions / clicks`                  |                        |
| ECPM Publisher           | `payout / volume * 1000`                |                        |
| ECPM Advertiser          | `revenue / volume * 1000`               |                        |
