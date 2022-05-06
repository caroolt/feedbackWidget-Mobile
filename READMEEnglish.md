

<h1 align="center">FeedWidget Mobile</h1>

![issues](https://img.shields.io/github/issues/caroolt/feedbackWidget-Web?color=red) ![license](https://img.shields.io/github/license/caroolt/feedbackWidget-Web)

<!-- Image that represents what the project does -->
|![Image demonstrating the project which is a chat where the user can send Feedback (bug, improvement idea and any other feedback)](./assets/readme.png) | 
| :---: |

## Index
  1. [Project Description](#description)
  2. [Techniques and Technologies](#technologies)
  3. [Open and run the project](#run_project)
  4. [Project Features](#project_features)
  4. [People who helped develop the project](#developers)
  5. [Portuguese Readme](./README.md)

### Project Description
###### description
This mobile project was initially thought as WEB and to be something "Simple", but that would help me study reactJS, reactNative(now with the mobile version) and nodeJS - worrying about accessibility. The goal of the project is to be a widget where the user can send feedback, be it a bug, an improvement idea or any other feedback that doesn't fit in these other two categories, besides that, the user will have the option to insert a screenshot, but the user won't have to take a screenshot, since by clicking the button the screenshot is automatically made and applied in the feedback. When sending this feedback, it is entered into a database and emailed to the developers, meaning **me**.

### Techniques and Technologies
###### technologies
- React
- Phosphor-react (for the icons)
- React-Native
- Typescript
- Expo
- Axios

## 🛠️ Open and run the project
###### run_project
#### 1- Clone the Project
#### 2- Install all dependencies
   `npm install`

#### 3- Transform the `api.example.ts` file into `api.ts` and replace the baseURL with the url where the server is running

#### 4- (You must have [EXPO](https://docs.expo.dev/get-started/installation/) installed on your computer) Run the project 
   `expo run dev`
 
### 🔨 Project Features
###### project_features
- `Hover`: When you hover the mouse over the widget a color transition will occur and text will appear that reads 'feedback'
- `Category Choice`: You can choose the category of the feedback by clicking on the widget
- `Auto Print`: By clicking the button (after selecting the category) an automatic print of the screen is taken and inserted into the feedback

## Project Developer
###### developers
| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) | 
| :---: |


