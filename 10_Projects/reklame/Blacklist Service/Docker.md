
---

#### Build
```
docker build -t reklame-blacklist-service-stage:v1 .
```

#### Run
```
docker run --rm --name reklame.blacklist-service --env-file .env.stage -e INSTALLATION_ID=2 -e TASK_TYPE=whitelisted_only -e CHANGE_ID=2 reklame-blacklist-service-stage:v1
```
Installation ID (required)
```
-e INSTALLATION_ID=2
```
Task type (required)
```
-e TASK_TYPE=whitelisted_only
-e TASK_TYPE=blacklisted_only
```
Blacklist IDs (optional)
```
-e BLACKLIST_IDS=1
```

#### All
```
pnpm run format && docker build -t reklame-blacklist-service-stage:v1 . && clear && docker run --rm --name reklame.blacklist-service --env-file .env.stage -e INSTALLATION_ID=1 -e TASK_TYPE=check_whitelisted -e BLACKLIST_IDS=1,2,3,4 reklame-blacklist-service-stage:v1
```