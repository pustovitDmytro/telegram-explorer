# [1.2.0](https://github.com/pustovitDmytro/telegram-explorer/compare/v1.1.1...v1.2.0) (2019-11-04)


### Chore

* (build): skip security test in ci ([30f2f0cf72e949314433eb7ada1d1eb5d5921449](https://github.com/pustovitDmytro/telegram-explorer/commit/30f2f0cf72e949314433eb7ada1d1eb5d5921449))
* (log) service verbose logging ([5b6ba5c62774a44adcb79247bba45e026661fcac](https://github.com/pustovitDmytro/telegram-explorer/commit/5b6ba5c62774a44adcb79247bba45e026661fcac))
* (refactor) remove waste logs ([5e92b6b416312b13f7006ba5257dd66aaa06491b](https://github.com/pustovitDmytro/telegram-explorer/commit/5e92b6b416312b13f7006ba5257dd66aaa06491b))

### Fix

* chat instead of chatId in sendMessage ([5baf92b5f4f96731fc2b52c80bfc1a299ee98f30](https://github.com/pustovitDmytro/telegram-explorer/commit/5baf92b5f4f96731fc2b52c80bfc1a299ee98f30))

### New

* adds forward sender and fixes date format ([5220029f5b56b9ffaeb6496fb148cfc65776eca4](https://github.com/pustovitDmytro/telegram-explorer/commit/5220029f5b56b9ffaeb6496fb148cfc65776eca4))
* Async import ([05a5b081832417d989cf4e0b0c9a9e73289576a6](https://github.com/pustovitDmytro/telegram-explorer/commit/05a5b081832417d989cf4e0b0c9a9e73289576a6))
* config from env ([ce1c65e03166b969f20fb9e64a3d2c4e966b4caf](https://github.com/pustovitDmytro/telegram-explorer/commit/ce1c65e03166b969f20fb9e64a3d2c4e966b4caf))

## [1.1.2](https://github.com/pustovitDmytro/telegram-explorer/compare/v1.1.1...v1.1.2) (2019-07-18)


### Chore

* (refactor) remove waste logs ([5e92b6b416312b13f7006ba5257dd66aaa06491b](https://github.com/pustovitDmytro/telegram-explorer/commit/5e92b6b416312b13f7006ba5257dd66aaa06491b))

### Fix

* chat instead of chatId in sendMessage ([5baf92b5f4f96731fc2b52c80bfc1a299ee98f30](https://github.com/pustovitDmytro/telegram-explorer/commit/5baf92b5f4f96731fc2b52c80bfc1a299ee98f30))

## [1.1.1](https://github.com/pustovitDmytro/telegram-explorer/compare/v1.1.0...v1.1.1) (2019-07-18)


### Fix

* additional logging on API errors ([cd97f711ace535fc5393c03b60356d47402ea783](https://github.com/pustovitDmytro/telegram-explorer/commit/cd97f711ace535fc5393c03b60356d47402ea783))

# [1.1.0](https://github.com/pustovitDmytro/telegram-explorer/compare/v1.0.0...v1.1.0) (2019-07-18)


### Chore

* add ExpressController ([a1fbb3af66662ac3fc49fc3fc0ad066637bfb228](https://github.com/pustovitDmytro/telegram-explorer/commit/a1fbb3af66662ac3fc49fc3fc0ad066637bfb228))
* add mocha tests ([a18f39153bea041c58ed9b75e3e0df1bafd2c2d6](https://github.com/pustovitDmytro/telegram-explorer/commit/a18f39153bea041c58ed9b75e3e0df1bafd2c2d6))

### Chrore

* environment tests ([d60790d14427542b95bf6ecadb779c997e0c2b02](https://github.com/pustovitDmytro/telegram-explorer/commit/d60790d14427542b95bf6ecadb779c997e0c2b02))

### New

* add DocoptController abstraction ([4ff0c22ea3e6707128e9c7b119affd64406909c3](https://github.com/pustovitDmytro/telegram-explorer/commit/4ff0c22ea3e6707128e9c7b119affd64406909c3))
* add health binaries ([f4f6a4791d7898bd4b3dd260d6bde2c87c2f20ec](https://github.com/pustovitDmytro/telegram-explorer/commit/f4f6a4791d7898bd4b3dd260d6bde2c87c2f20ec))
* init telegram with webhook alongside polling ([1820db2a7824564bcbb70885706a408fd9bda2b6](https://github.com/pustovitDmytro/telegram-explorer/commit/1820db2a7824564bcbb70885706a408fd9bda2b6))
* process update on webhook ([3e5d8ca9c70105e934f75db13a2adf4ee497a428](https://github.com/pustovitDmytro/telegram-explorer/commit/3e5d8ca9c70105e934f75db13a2adf4ee497a428))

# 1.0.0 (2019-07-11)


### Build

* (config) add default config ([e5ea1b014c78009d9b0a6c65db55107824cf28b0](https://github.com/pustovitDmytro/telegram-explorer/commit/e5ea1b014c78009d9b0a6c65db55107824cf28b0))
* (config) not throw error when config file not found ([80a46622db39e9f54cb95185ad86785686890674](https://github.com/pustovitDmytro/telegram-explorer/commit/80a46622db39e9f54cb95185ad86785686890674))
* (config) parse and merge configs with env ([7ef16ba4955dbcee196097be5fdba7a926e30702](https://github.com/pustovitDmytro/telegram-explorer/commit/7ef16ba4955dbcee196097be5fdba7a926e30702))
* (heroku) add heroku autodeploy from travis ([4e686e56e2abae517906e0ff22f5e3c17966cb44](https://github.com/pustovitDmytro/telegram-explorer/commit/4e686e56e2abae517906e0ff22f5e3c17966cb44))
* (heroku) add Procfile ([b49ae9b677c91872183a281f3a720b335467abb1](https://github.com/pustovitDmytro/telegram-explorer/commit/b49ae9b677c91872183a281f3a720b335467abb1))
* update package.json on release ([6c8aaf6cb751fa72563fea187cd8b7b5ae251d36](https://github.com/pustovitDmytro/telegram-explorer/commit/6c8aaf6cb751fa72563fea187cd8b7b5ae251d36))

### Chore

* (git) add changelog on release ([91c4e394af295656fe44fbb025dd5586e5a50e60](https://github.com/pustovitDmytro/telegram-explorer/commit/91c4e394af295656fe44fbb025dd5586e5a50e60))
* add babel ([c712786576d8087452aa659d69769149f859e885](https://github.com/pustovitDmytro/telegram-explorer/commit/c712786576d8087452aa659d69769149f859e885))
* add eslint ([2e7c2409e2b4db843c04287a02583b44c317f6e1](https://github.com/pustovitDmytro/telegram-explorer/commit/2e7c2409e2b4db843c04287a02583b44c317f6e1))
* init project ([f3c1982c329aabf6fb828b48fc402cc9561b319f](https://github.com/pustovitDmytro/telegram-explorer/commit/f3c1982c329aabf6fb828b48fc402cc9561b319f))
* initial release setup ([8382a9f5ac8b4d20d1c33523f7c7196f08c535cd](https://github.com/pustovitDmytro/telegram-explorer/commit/8382a9f5ac8b4d20d1c33523f7c7196f08c535cd))

### Fix

* repository url corrected ([f237759b67d05dea4381de780010e33a5f993492](https://github.com/pustovitDmytro/telegram-explorer/commit/f237759b67d05dea4381de780010e33a5f993492))
* sync package and package-lock ([55fe354ad0783bbf0c8c2b244ab577ba3c262f1e](https://github.com/pustovitDmytro/telegram-explorer/commit/55fe354ad0783bbf0c8c2b244ab577ba3c262f1e))

### New

* Add Long polling ([ec01324fbf3da4fe25557a90e677f052e131822d](https://github.com/pustovitDmytro/telegram-explorer/commit/ec01324fbf3da4fe25557a90e677f052e131822d))
* basic routing ([d083c09691dcfd22f597e7f42f580bea2d7297d6](https://github.com/pustovitDmytro/telegram-explorer/commit/d083c09691dcfd22f597e7f42f580bea2d7297d6))
* Error handling ([cc8c9b90077c111fde89a45879c62aa967b43755](https://github.com/pustovitDmytro/telegram-explorer/commit/cc8c9b90077c111fde89a45879c62aa967b43755))
* processing updates on long polling ([3b05e642d72e153527ddd8b3a4d9bc23e751dc04](https://github.com/pustovitDmytro/telegram-explorer/commit/3b05e642d72e153527ddd8b3a4d9bc23e751dc04))
* send reports ([2670b5d6e2b657829d30e4d6a324dfdcdb3e9be7](https://github.com/pustovitDmytro/telegram-explorer/commit/2670b5d6e2b657829d30e4d6a324dfdcdb3e9be7))

### Update

* add @babel/register ([1c426620af6ed081d28f7825dda04edd4339861d](https://github.com/pustovitDmytro/telegram-explorer/commit/1c426620af6ed081d28f7825dda04edd4339861d))
