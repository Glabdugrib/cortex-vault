# Changelog

## 2026-05-10
Switched auth middleware to validate JWT expiry server-side instead
of relying on client refresh. Found edge case where expired tokens
were accepted during Lambda cold start.
→ [[decisions/ADR-0007-server-side-jwt-validation]]

## 2026-04-15
Dropped the separate `room_schedules` table. Migration script in
git at commit `a3f92c1`. All existing schedule data was derivable
from reservations — no data loss.
→ [[ADR-0003-room-schedule-derived-entity]]

## 2026-03-20
Switched from monthly to weekly pagination after client call.
→ [[decisions/ADR-0004-weekly-pagination]]
→ [[2026-04-10-schedule-pagination-call]]