# Docker Private Registry
### Secretes
- `REGISTRY_URL`: `http://3c-docker.3caravelle.sys:4000`
- `IMAGE_NAME`: `telmed/frontend`

### List all images from CLI:
```sh
curl -s "http://3c-docker.3caravelle.sys:4000/v2/telmed/frontend/tags/list" | jq .
```

### List all TAGS with DIGESTS from CLI:
```sh
curl -s "http://3c-docker.3caravelle.sys:4000/v2/telmed/frontend/tags/list" | jq -r '.tags[]' | while read tag; do   digest=$(curl -s -I -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
    "http://3c-docker.3caravelle.sys:4000/v2/telmed/frontend/manifests/$tag" \
    | grep -i Docker-Content-Digest \
    | awk '{print $2}' \
    | tr -d '\r');   printf "%-40s %s\n" "$tag" "$digest"; done
```

### Delete tag from CLI:
```sh
curl -s -I -H "Accept: application/vnd.docker.distribution.manifest.v2+json" "${REGISTRY_URL}/v2/${IMAGE_NAME}/manifests/${TAG}"
```

### Get `DIGEST` from `Docker-Content-Digest`
```sh
curl -X DELETE "${REGISTRY_URL}/v2/${IMAGE_NAME}/manifests/${DIGEST}"
```

---

```sh
curl -s -I -H "Accept: application/vnd.docker.distribution.manifest.v2+json" "http://3c-docker.3caravelle.sys:4000/v2/telmed/frontend/manifests/feat-prova"
```

```sh
curl -s -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  "http://3c-docker.3caravelle.sys:4000/v2/telmed/frontend/manifests/feat-prova" \
  -I | grep Docker-Content-Digest
```

```sh
curl -s -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  "https://${REGISTRY_URL}/v2/${IMAGE}/manifests/${TAG}" \
  -I | grep Docker-Content-Digest
```

### Delete MANIFEST
```sh
curl -X DELETE "http://3c-docker.3caravelle.sys:4000/v2/telmed/frontend/manifests/${DIGEST}
```

curl -X DELETE "http://3c-docker.3caravelle.sys:4000/v2/telmed/frontend/manifests/"