<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
[![Netlify Status](https://api.netlify.com/api/v1/badges/9ead1c2e-d6d8-4259-95b0-358c0327b493/deploy-status)](https://app.netlify.com/sites/talita-website/deploys)

# Talita Camilo PS Website

## Using NodeJs 14 with Mac Silicon (M1)

Workaround to get NodeJs 14 to work with Mac Silicon. Apple provides Rosetta, a translation app that allows applications that are built for Intel Chip (or previous generation Mac) to run under Apple Silicon.

### Installing Rosetta

```sh
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

### Installing Node 14 (NVM)

```sh
# Switch to i386
arch -x86_64 zsh

# Confirm (should print "i386"
arch

# Install node
nvm install 14
```
