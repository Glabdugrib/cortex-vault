
---

| **TYPE** | **PATTERN** | **NOTE** |
| - | - | - |
| LIKE | contains at least one char `%` | like matches with *email* |
| DOMAIN | starts with char `@` | exactly matches with *domain* |
| EMAIL | any other case | exactly matches with *email* |

SET `blacklisted` to true

---

#### Execution durations
| **TYPE** | **1** | **1k** | **10k** | **100k** | **1kk** |
| - | - | - | - | - | - |
| MEMORY | 0.6s | 0,5s | 1.7s | 50.9s | 4001.2s |
| DATABASE | 1.4s | 1.4s | 9.7s | 111.1s | 4797.6s |
| DB vs ME | 222% | 300% | 559% | 218% | 119% |

x = database * 100 / memory

---

#### When to execute checks:
- User created
- Blacklist created
- Blacklist updated
- Manual global async check

#### Questions:
- should handle CRUD on Blacklist?
- column type can be used?
- check both user_id => void, email => bool

---