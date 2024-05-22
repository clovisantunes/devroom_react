## Git

## Folder Structure (general) ##

```bash
      NEXT_STRUCTURE
      ├── LICENSE
      ├── README.md - You are here!   
      ├── locales/ # Languages items
      │      └── # Start file names with lowercase letters ex: en.json
      ├── public/
      ├── src/
      │   ├──app/
      │   │   └──[lang]       
      │   │         └── page-example/ # Use lowercase letters in page names
      │   │         │        └── page.tsx # Lower case file name  ex: page.tsx
      │   │         │        └── styles.module.scss # Style name must follow pattern styles.module.scss
      │   │         └── page-example-two/ 
      │   │                  └── page.tsx
      │   │                  └── styles.module.scss
      │   ├── midleware.ts # Use lowercase letters in middleware 
      │   ├── styles/  # global styles
      │   │   └── global.scss # Always use lowercase letters in styles
      │   ├── components/
      │   │   ├── UI/ # UI Items ex : Button, Inputs
      │   │   │   └── Item-example # Capital first letter ex : Button
      │   │   │   │     └──  index.tsx
      │   │   │   │     └──  styles.module.scss
      │   │   │   └── Item-example-two 
      │   │   │         └──  index.tsx
      │   │   │         └──  styles.module.scss
      │   │   └── Component-example/ # Uppercase component name
      │   │   │        └── index.tsx # Files with lowercase first letter
      │   │   │        └── styles.module.scss # Styles with lowercase first letter
      │   │   └── Component-example-two/
      │   │           └── index.tsx
      │   │           └── styles.module.scss   
      │   ├── utils/ # reusable hooks
      │   │     └── utilExample.ts # Files with lowercase first letter
      │   ├── contexts/ # Api consumer handlers Ex: User information and authentication validation
      │   │     └── AuthContext.tsx # Files must start with uppercase letters
      │   └── i18n.js # i18n configuration 
```