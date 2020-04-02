# HuntURL
> During my internship at Microsoft, I did a side project. This is the blog website. The main service of this website is that it can recommend the similar url to user based on user's description in the post.  

## Motivation
> I want to improve my web development with node.js using MVC architecture and familiar with mongoose and middleware usage. There are multiple Azure services on top of this website, representing my familiarity with Azure PaaS and having some practical capabilities. Through this project I was also exposed to python, implement crawling, data processing, and also use multiprocess and multithread to improve the efficiency.
>
> ### Azure Services I used in this project
>  - Azure Blob Storage using sas token
>  - Azure Function app to implement background work
>  - Azure Batch service to improve the efficiency
>  - Azure Cosmos DB to store the data
>  - Azure Web App to carry website
>  - Azure DevOps to control the development process
>  - Azure Translator Text API

## Website features
> Sometimes I search the problem on google, but there is a problem I have no idea with related keyword. Therefore, I want to implement a new searching style. That is using user's browsing history. (Of course, it's important to ask the user for consent) User can contribute their history to this website, and post their problems to search their wanted url. Even though they don't know the keyword, they can try to descript the situation. This website will find the similar content of all the urls from all users  and recommend to you.<br>

## Website Architecture

  

