# Setting Up Your Development Environment
This guide will help you set up your local machine with all the tools you will need in this cohort (and the webdev industry).

Before you begin, create a folder for this cohort wherever you want to store any GitHub repos that you will be cloning on your device in this cohort. You can name it include, cohort, or literally anything you want to. If you choose to name it "include", do not use a '#' in your folder name, it'll cause a bunch of problems later. 


## 1. VISUAL STUDIO CODE
Visual Studio Code (or VSCode) is a code editor that makes life as a developer easy and efficient. It combines the processes of editing, building, testing and packaging an application.

If you do not already use VSCode, follow these steps:
1. Download the VSCode installer for your OS from https://code.visualstudio.com/download.
2. Run the installer and follow the installation wizard.
3. Once done installing, open VSCode to see the welcome page. Press **Ctrl + \`** on Windows or **Command + \`** on Mac to open Terminal (Or you can use the terminal tab on top but it's better to get used to the shortcuts.)


## 2. GIT, GITHUB ACCOUNT AND GITHUB DESKTOP
Git is a version control system (i.e. it helps you track the changes you have made to your code over time) and GitHub is a platform that helps you manage Git repositories and collaborate on projects.

If you do not already have a GitHub Account, head over to https://github.com/ and create one. 

As beginners, we recommend using the GitHub Desktop app to get used to Git and the process of version control.
1. Download GitHub Desktop for your OS from https://desktop.github.com/.
2. Run the installer and follow the installation wizard.
3. When the installation finishes, open GitHub Desktop.
4. Click on File > Options... > Accounts pane > Sign in to your GitHub.com account.
5. When prompted, click on continue with browser and sign in/complete 2FA. 
6. After GitHub authenticates your account, you can go back to GitHub Desktop.


## 3. NODE.JS
Node.js is a runtime environment that is used to run Javascript code. It comes with the Node Package Manager (npm) that helps us manage the Javascript packages used in our project. To set up node.js:
1. Download the Node.js installer for your OS from https://nodejs.org/en/download/current 
2. Run the installer and follow the installation wizard.
3. Once the installation finishes, open a terminal on VSCode and type *node --version* to verify your node installation. Type *npm --v* to verify your npm installation. 

    a. If you get an error saying that node or npm is not recognized as a command, try restarting VSCode to see if the issue fixes itself. (If you had VSCode opened while installing Node, this should fix it.)
   
    b. If the problem persists, search for *Environment variables* in your Start menu. Click on *Edit your Environment variables*. Click on *Environment Variables* in the new window that opens up.
   
    c. Find the variable *Path* and click on *Edit*.
   
    d. Check for *C:\Program Files\nodejs\\* in the list of paths that appear. If it's not there, click on *New* and add it to the list.

    e. Restart VSCode and it should ideally work now. 


## 4. ESLINT EXTENSION
ESLint is an extension that ensures that your code adheres to certain code style. It also auto-formats your code on save in VSCode.  To enable it:
1. Go to the Extensions tab on VSCode and install *ESLint*.
2. Once it is installed, open your Command Palette by pressing **Ctrl + SHift + P**/**Command + Shift + P** and search for **Preferences: Open Workspace Settings (JSON)**. Open the file and add this code into the file:

    ```json
    {"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
    }
    ```


## 5. (OPTIONAL) AUTO RENAME TAG EXTENSION
This is a completely optional but super helfpul extension that automatically renames paired HTML tags when you edit them. You can install it on VSCode the same way you installed ESLint. 

-----------------------------------------------------------------------------------------------------------
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Set up:

`npm install` for package installations

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.