# Edinburgh public data packs (CSS load)

Built: 2026-08-09
Target site: https://comunityshieldscotland.grok.me/
Council: City of Edinburgh · 17 multi-member wards

## Priority order worked this session

### 2 — Area Profile (STARTED + city pack ready)
- Power BI ward dashboards: interactive (link in pack.json) — **ward bulk export still manual**
- Edinburgh by Numbers 2025: PDF + DOCX + text extract + **city_indicators.csv**
- SIMD 2020 Edinburgh report PDF downloaded
- Status: city-level installable now; ward extras need Power BI export

### 3 — Money trail (public accounts re-key pack ready)
- CEC audited accounts 2024/25 + Audit Scotland AAR
- ALEOs/subsidiaries: Edinburgh Leisure, TfE, CEC Holdings, Edinburgh Living, EIJB, CCP
- **money_trails.csv** + pack.json headlines for Follow the Money
- Status: ready to re-key into CSS money pages (not ward-level)

### 1 — RoS house prices (structure ready, file blocked)
- Automated download blocked by Cloudflare
- pack.json has XLSX URL + 17 ward slug map
- City benchmark from Edinburgh by Numbers: avg £294,488 (Sep 2025)

## What is still FOI-only (not in these packs)
Homelessness ops by ward, voids, damp/mould, fly-tipping/CSAS, community grants by ward, ward spend.

## Files
```
area-profile/
  pack.json
  city_indicators.csv
  Edinburgh_by_Numbers_2025.{pdf,docx,txt}
  Edinburgh_SIMD_2020_report.pdf
money-trail/
  pack.json
  money_trails.csv
  CEC_audited_accounts_2024-25.pdf
  CEC_AAR_2024-25.pdf (+ extract)
  Edinburgh_Leisure_2024-25.pdf
  cec-holdings / transport-for-edinburgh / edinburgh-living / EIJB / CCP pdfs
ros-prices/
  pack.json
```
