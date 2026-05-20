
Hi Vicente,

I hope you're doing well.

I’m currently working on the integration with the TUNE Network API and I need some clarification from your technical team regarding how to retrieve the complete list of Sources.

I could not find a dedicated API endpoint to fetch all Sources, so I attempted to use the `Report::getStats` method. Here are the results:

**Case 1 – Specifying a date range:**  
GET https://reklame.api.hasoffers.com/Apiv3/json?NetworkToken={{NetworkToken}}&Target=Report&Method=getStats&data_start=2025-01-01&data_end=2025-01-31&limit=50&page=1&fields[]=Stat.source

Parameters:
- NetworkToken={{NetworkToken}}
- Target=Report
- Method=getStats
- data_start=2025-01-01
- data_end=2025-01-31
- currency=EUR
- limit=50
- page=1
- fields[]=Stat.source

Result: 500 Internal Server Error

**Case 2 – Without specifying a date range:**  
GET https://reklame.api.hasoffers.com/Apiv3/json?NetworkToken={{NetworkToken}}&Target=Report&Method=getStats&limit=50&page=1&fields[]=Stat.source

Parameters
- NetworkToken={{NetworkToken}}
- Target=Report
- Method=getStats
- limit=50
- page=1
- fields[]=Stat.source

Result: 200 OK  
Status: -1  
Error: Your time frame must be within the last 18 months (548 days) when including affiliate sub ID, source, or fraud-related fields and metrics. Select a time frame that begins after 2024-04-22

My questions are:
1. Is there an official API endpoint to retrieve the full list of Sources?
2. Are Source data limited to the last 18 months, or is there a method to access older records?

Thank you in advance for your guidance.

Best regards,

Simone Sada