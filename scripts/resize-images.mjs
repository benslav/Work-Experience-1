import sharp from 'sharp';

const jobs = {
  'hero-weekly-plan':       [400, 800, 1200],
  'feature-goal-builder':   [400, 800, 1200],
  'feature-growth-plan':    [400, 800, 1200],
  'feature-monday-checkin': [400, 800, 1200],
  'playbook-reviews':       [400, 800],
  'playbook-referrals':     [400, 800],
  'playbook-rebooking':     [400, 800],
  'team-workshop':          [800, 1200, 1600, 2400],
};

for (const [name, widths] of Object.entries(jobs)) {
  for (const w of widths) {
    await sharp(`public/images/${name}.jpg`)
      .resize({ width: w })                   // height scales automatically
      .jpeg({ quality: 75, mozjpeg: true })   // compression
      .toFile(`public/images/${name}-${w}.jpg`);
    console.log(`${name}-${w}.jpg`);
  }
}