# xRAF Dashboard Update - December 2024

## Summary of Changes

### Payment Structure Changes

| OLD Structure | NEW Structure |
|---------------|---------------|
| RM50 - Assessment Passed | ❌ REMOVED |
| RM750 - 90 days probation | → RM500 - Mandarin Johor (90 days) |
| | → RM800 - Standard Roles (90 days) |
| | → RM3,000 - WFH Interpreter (90 days) |

### Key Changes

1. **No more RM50 assessment bonus** - All payment related to assessment has been removed
2. **Single payment after 90 days probation** - All tiers now pay only after 90 days
3. **Three-tier payment structure** based on job type/location:
   - **RM500** - Mandarin speakers in Johor
   - **RM800** - Standard roles in other locations
   - **RM3,000** - Work From Home Interpreter positions

### Files Updated

| File | Changes |
|------|---------|
| `statusMapping.js` | Updated `earningsStructure` with 3 tiers, removed assessment payment logic |
| `script.js` | Updated earnings calculation, removed assessment eligibility checks |
| `translations.js` | Updated payment text in all 5 languages (EN, JA, KO, ZH-CN, ZH-HK) |
| `index.html` | Updated TnG modal with new payment cards (Orange/Black/Blue styling) |
| `styles.css` | Updated to TP Brand colors (Blue `#3047b0`, Orange `#ff5c00`) |
| `apiService.js` | Updated mock data with 12 records (2 per status category) |

### Color Updates (TP Brand)

| Element | Old Color | New Color |
|---------|-----------|-----------|
| Primary Blue | `#0087FF` | `#3047b0` (Blue TP) |
| Accent | `#FFD700` | `#ff5c00` (Orange TP) |
| Success | `#00d769` | `#84c98b` (Green Light TP) |
| Warning | `#f5d200` | `#F5D200` (Yellow TP) |

### Status Categories (Unchanged)

The 6 status groups remain the same:
1. Application Received
2. Assessment Stage
3. Hired (Probation) - less than 90 days
4. Hired (Confirmed) - 90+ days ✅ Payment eligible
5. Previously Applied (No Payment)
6. Not Selected

### Mock Data (Demo Mode)

Demo credentials: `0123456789` / `amr@tp.com` or add `?demo=1` to URL

12 records total (2 per status category):
- Application Received: Tarek Ezz, Loai Ahmed
- Assessment Stage: Micole Barrientos, Pourya Tohidi  
- Hired (Probation): Melaine Sua, Anna Saw Yee Lin
- Hired (Confirmed): Maho Yoriguchi, Sieon Lee
- Previously Applied: David Ong (LinkedIn), Chloe Tan (JobStreet)
- Not Selected: Nurul Lydia Adini, Hanna Wong

---

## For RPA Team - Future Backend Requirements

### No Changes Required Now
The backend/SharePoint doesn't need changes for this update. The current structure works.

### Future Enhancement (When Ready)
To differentiate between the 3 payment tiers, we'll need:

1. **Job Location Column** - To identify Johor vs other locations
   - Current: `Location` field exists
   - Need: Standardize values (e.g., "Johor Bahru", "Johor")

2. **Job Type/Position Column** - To identify WFH Interpreter
   - May need: New field for job category
   - Or: Use position title to detect "Interpreter"

3. **Language Column** - To identify Mandarin speakers
   - May need: Candidate language proficiency field

### Current Workaround
For now, the dashboard shows all eligible referrals under "Standard Roles (RM800)" until the backend can differentiate between tiers.

---

## Deployment Checklist

- [ ] Add `TPLogo11.png` to the dashboard folder
- [ ] Test demo mode: `?demo=1` or use credentials
- [ ] Verify all 5 languages display correctly
- [ ] Test WhatsApp reminder function
- [ ] Verify payment modal shows new structure
- [ ] Deploy to hosting

---

## Contact

For questions about these changes, contact the Recruitment & Selection team.

Last Updated: December 2024
