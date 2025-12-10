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
   - **RM500** - Mandarin speakers in Johor (Orange color)
   - **RM800** - Standard roles in other locations (Black color)
   - **RM3,000** - Work From Home Interpreter positions (Blue color)

### Mock Data - 18 Records

| Status | Johor (RM500) | Standard (RM800) | Interpreter (RM3000) |
|--------|---------------|------------------|----------------------|
| Application Received | Tarek Ezz | Loai Ahmed | Sarah Chen |
| Assessment Stage | Micole Barrientos | Pourya Tohidi | Wei Lin Tan |
| Hired (Probation) | Melaine Sua | Anna Saw Yee Lin | Koji Yamamoto |
| Hired (Confirmed) ✅ | Maho Yoriguchi | Sieon Lee | Liu Mei Hua |
| Previously Applied | David Ong (LinkedIn) | Chloe Tan (JobStreet) | Ahmad Razak (Walk-in) |
| Not Selected | Nurul Lydia Adini | Hanna Wong | Park Min Jun |

**Total: 18 records** (6 statuses × 3 payment tiers)

**Payment Eligible (Hired Confirmed + xRAF): 3 records**
- 1 Johor = RM500
- 1 Standard = RM800  
- 1 Interpreter = RM3,000
- **Total: RM4,300**

### Files Updated

| File | Changes |
|------|---------|
| `statusMapping.js` | Updated earningsStructure with 3 tiers |
| `script.js` | Updated earnings calculation with tier detection |
| `translations.js` | Updated payment text in all 5 languages |
| `index.html` | Updated TnG modal with flat tier cards |
| `styles.css` | Updated to match xRAF colors (Black/White base with TP accents) |
| `apiService.js` | 18 mock records with PaymentTier field |

### Color Scheme - Matching xRAF

**Base Theme:**
- Primary: Black #000000
- Background: White #ffffff

**TP Brand Accents:**
| Element | Color | Hex |
|---------|-------|-----|
| Application Received | Light Blue TP | #0087FF |
| Assessment Stage | Green Flash TP | #00d769 |
| Hired (Probation) | Yellow TP | #f5d200 |
| Hired (Confirmed) | Green Light TP | #84c98b |
| Previously Applied | Burgundy TP | #5f365e |
| Not Selected | Carmine TP | #ab2c37 |

**Payment Tier Colors:**
| Tier | Color | Hex |
|------|-------|-----|
| Johor (RM500) | Orange TP | #ff5c00 |
| Standard (RM800) | Black | #000000 |
| Interpreter (RM3000) | Blue TP | #3047b0 |

### Demo Mode

**Credentials:** 0123456789 / amr@tp.com
**URL Parameter:** ?demo=1

---

## For RPA Team

### No Backend Changes Required Now
The current SharePoint structure works with this update.

### Future Enhancement (When Ready)
To auto-detect payment tiers, the system currently checks:
1. Position field for "interpreter" → RM3,000 tier
2. Location field for "johor" → RM500 tier
3. Default → RM800 standard tier

---

## Deployment Checklist

- [ ] Add TPLogo11.png to the dashboard folder
- [ ] Test demo mode: ?demo=1 or use credentials
- [ ] Verify all 5 languages display correctly
- [ ] Verify earnings table shows 3 tiers with correct counts
- [ ] Test WhatsApp reminder function
- [ ] Verify payment modal shows new structure
- [ ] Deploy to hosting

---

Last Updated: December 2024
