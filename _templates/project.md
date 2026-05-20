<%*
let title, date;
try {
	title = await tp.user.getLastProject(tp)({depth: 1});
	date = tp.date.now("YYYY-MM-DD");
	
	await tp.file.rename("project");
} catch (error) {
	console.error(error);
	await app.vault.delete(tp.config.target_file);
	return;
}
-%>
---
title: "<% title %>"
type: project
status: active
started: <% date %>

---
# <% title %>

## Context
<!-- What is this project and why does it exist? Business goal in 2-3 sentences. -->

## Architecture
<!-- High-level: stack, key components, main constraints. -->

<!-- Mermaid diagram placeholder -->
```mermaid
graph LR
  A[Frontend] -->|REST| B[Backend]
  B --> C[(Database)]
```

## Requirements
<!-- What the product must do. Keep it current — edit in place when things change. -->

## Tasks
<!-- Active tasks only. Completed tasks get deleted, not archived. -->
- [ ] 

## Improvements
<!-- Ideas, refactors, or tech debt worth tracking — but not active tasks yet.
     Move to Tasks when prioritized, delete when no longer relevant. -->

## People
<!-- Name — role — contact -->

## Open questions
<!-- Unresolved decisions or things to clarify. Remove when resolved. -->

## Improvements
<!-- Future improvements to be implemented. -->