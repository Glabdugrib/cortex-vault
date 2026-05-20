### Shutdown all WSL instances (as administrator)
```
wsl --shutdown
```

### Verify everything is stopped by
```
wsl.exe --list --verbose
```

### Manually shutdown Ubuntu (if needed) 
```
wsl --terminate Ubuntu
```

### Start diskpart
```
diskpart
```

### Select diskpart file
```
select vdisk file="C:\Users\simon\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_79rhkp1fndgsc\LocalState\ext4.vhdx"
```

### Shrink diskpart
```
compact vdisk
```

---

[Source](https://stackoverflow.com/questions/70946140/docker-desktop-wsl-ext4-vhdx-too-large)