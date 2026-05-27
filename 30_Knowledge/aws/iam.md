# Identity and Access Management (IAM)

- Global service
- Root account (created by default) shouldn't be used or shared
- Users are people within your organization

## Groups
- User can be grouped
- Groups can only contain users, not other groups
- Users don't have to belong to a group (not a best practice)
- Users can belong to multiple groups

## Permissions
- Users or Groups can be assigned JSON documents called **policies**
- Policies define the **permissions** of the user
- **Least privilege principle**: don't give more permissions than a user needs.