# IAM Policy

## Structure
- **Version**: policy language version (e.g. `2012-10-17`)
- **Id**: identifier for the policy (optional)
- **Statement**: one or more individual statements (required)
	- **Sid**: identifier for the statement (optional)
	- **Effect**: whether the statement allows or denies access (e.g. `Allow`, `Deny`)
	- **Principal**: account/user/role to which this policy is applied to
	- **Action**: list of actions allowed or denied
	- **Resource**: list of resources to which the actions are applied to
	- **Condition**: conditions for when the policy is in effect (optional)