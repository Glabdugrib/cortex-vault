<%*
let slug, title, project, date, time, filename;
try {
	slug = await tp.user.getSlug(tp);
	title = await tp.user.getTitle(tp, slug);
	project = await tp.user.getLastProject(tp)({depth: 2});
	date = tp.date.now("YYYY-MM-DD");
	time = tp.date.now("HH:mm")
	filename = `${date}-${slug}`;
	
	await tp.file.rename(filename);
} catch (error) {
	console.error(error);
	await app.vault.delete(tp.config.target_file);
	return;
}
-%>
---
id: <% filename %>
slug: <% slug %>
date: <% date %>
time: <% time %>
type: meeting
project: <% project %>
attendees:

---
# <% date %> - <% title %>

## Decided
<!-- Outcomes only. If a decision is non-obvious, create an ADR and link it here. -->

## Actions
<!-- Tasks that came out of this meeting. Mirror them in project.md > Tasks. -->
- [ ] 

## Context worth keeping
<!-- The "why" behind the decisions above. The human reasoning that won't be
     in the ADR — constraints, opinions, history mentioned during the call. -->