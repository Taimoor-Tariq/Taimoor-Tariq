const fs = require('fs');
const profile = require('../public/profile');

let readme = `# Hi 👋, I'm ${profile.name}

### I am a ${profile.title}

### 📈 My GitHub Stats

<p>
  <a href="#">
    <img align="left" height="144em" src="https://github-readme-stats.vercel.app/api?username=Taimoor-Tariq&title_color=F04747&text_color=7289DA&icon_color=F04747&bg_color=23283D&hide_border=truee&hide_title=true&show_icons=true&include_all_commits=true&count_private=true"  alt="Taimoor-Tariq's GitHub stats" />
  </a>

  <a href="#">
    <img align="center" height="144em" src="https://github-readme-stats.vercel.app/api/top-langs?username=Taimoor-Tariq&title_color=F04747&text_color=7289DA&icon_color=F04747&bg_color=23283D&hide_border=true&layout=compact&langs_count=4" alt="Taimoor-Tariq's most used languages" />
  </a>
</p>
`;

readme += "\n## 🔗 My socials\n\n";
profile.socials.forEach(s => {
    if (s.badge) readme += `[![${s.name}](https://img.shields.io/badge/${s.name}-${s.badge.color}?style=for-the-badge&logo=${s.badge.name}&logoColor=${s.badge.logoColor})](#)\n`;  
});

readme += "\n## ✨ Languages and Frameworks I use\n\n";
profile.devSkills.forEach(s => {
    readme += `[![${s.name}](https://img.shields.io/badge/${s.name}-${s.badge.color}?style=for-the-badge&logo=${s.badge.name}&logoColor=${s.badge.logoColor})](#)\n`;
});

readme += "\n## 🦖 Editor and Services I use\n\n";
profile.editorAndServices.forEach(s => {
    readme += `[![${s.name}](https://img.shields.io/badge/${s.name}-${s.badge.color}?style=for-the-badge&logo=${s.badge.name}&logoColor=${s.badge.logoColor})](#)\n`;
});

fs.writeFileSync("./README.md", readme);