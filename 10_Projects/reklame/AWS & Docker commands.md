# <u>Task</u>

#### Run
```
aws ecs run-task --cluster stage-containers --task-definition import-service-stage-containers --network-configuration awsvpcConfiguration="{subnets=[subnet-0da403a2f5f9c7b4e],securityGroups=[sg-062658605364d7372],assignPublicIp=DISABLED}"  --enable-execute-command --launch-type FARGATE  --platform-version 'LATEST' --overrides '{"containerOverrides":[{"name":"reklame-import-users-service-stage","environment":[{"name":"APP_ENV","value":"stage"},{"name":"IMPORT_ID","value":"176"}]}]}' --profile=reklame-cli --region=eu-central-1
```

#### Stop 
```
aws ecs stop-task --task={ARN} --cluster=stage-containers --profile=reklame-cli --region=eu-central-1
```

#### List
```
aws ecs list-tasks --cluster=stage-containers --profile=reklame --family=import-service-stage-containers --profile=reklame-cli --region=eu-central-1
```

#### Bash
```
aws ecs execute-command --cluster stage-containers --task {ARN} --command "/bin/bash" --interactive --profile=reklame-cli --region=eu-central-1
```

#### Logs link
[Tasks](https://eu-central-1.console.aws.amazon.com/ecs/v2/clusters/stage-containers/tasks)
[Task logs](https://eu-central-1.console.aws.amazon.com/ecs/v2/clusters/stage-containers/tasks/{ARN}/logs?region=eu-central-1#)

---

# <u>S3 Bucket</u>

#### List files
```
aws s3 ls s3://import-service-stage --recursive
```

#### Put file
```
aws s3 cp {FILE_PATH.EXTENSION} s3://import-service-stage/{FILE_KEY}
```

#### Download link
```
aws s3 presign s3://import-service-stage/{FILE_PATH.EXTENSION} --expires-in 3600
```

Bucket: `import-service-stage`

---

# <u>Docker</u>

#### Build
```
docker build -t reklame-import-users-service-stage:v1 .
```

#### Run
```
docker run --rm --name reklame.import-service -e APP_ENV=stage -e IMPORT_ID=176 reklame-import-users-service-stage:v1
```

#### Stop
```
docker run --rm -e APP_ENV=stage -e IMPORT_ID=176 -e STOP=true reklame-import-users-service-stage:v1
```

#### Restore
```
docker run --rm -e APP_ENV=stage -e IMPORT_ID=176 -e RESTORE=true reklame-import-users-service-stage:v1
```

#### Logs tail
```
docker exec -it reklame.import-service tail -f /var/www/storage/log/laravel.log
```

#### Bash
```
docker exec -it {CONTAINER_ID} bash
```