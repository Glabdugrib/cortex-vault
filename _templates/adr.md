<%*
const ADR_PATTERN = /^ADR-\d{4}-/;
const ADR_NUM_PATTERN = /^ADR-(\d{4})-/;

let slug, filename, title, project, date;
try {
	const num = tp.user.getNumber(tp, ADR_PATTERN, ADR_NUM_PATTERN);
	slug = await tp.user.getSlug(tp);
	filename = `ADR-${num}-${slug}`;
	title = await tp.user.getTitle(tp, slug);
	project = await tp.user.getLastProject(tp)({depth: 2});
	date = tp.date.now("YYYY-MM-DD");
	
	await tp.file.rename(filename);
} catch (error) {
	console.error(error);
	await app.vault.delete(tp.config.target_file);
	return;
}
-%>
---
id: <% filename %>
title: <% title %>
type: adr
status: Proposed
date: <% date %>
supersedes: ""
superseded-by: ""
project: <% project %>

---
# <% filename %>

## Context
<!-- What is the situation forcing this decision? Include constraints, previous state, and what happens if we do nothing. -->

## Decision
<!-- What exactly are we doing? Be specific. -->

## Consequences
<!-- List trade-offs explicitly. -->

## Revisit if
<!-- Conditions that would make this decision worth reconsidering. -->