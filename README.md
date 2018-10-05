# Matthews Tire

This is the source for the [Matthews Tire](http://matthewstire.com) website.

Development site: <http://matthewstire.insightcreative.info>  
Live site: <http://matthewstire.com>  
Git repository: <https://bitbucket.org/insightcreative/matthews-tire>

## Table of Contents
1. [Getting Started](#-getting-started)
2. [Contributing](#-contributing)
3. [File Structure](#-file-structure)
    1. [Pages](#pages)
    2. [Blog](#blog)
    3. [Images](#images)
    4. [Data](#data)
    5. [Site](#site)
    6. [Styles](#styles)
4. [Deployment Workflow](#-deployment-workflow)    
5. [Adding a Blog Post](#%EF%B8%8F-adding-a-blog-post)
    1. [Images](#%EF%B8%8F-images)
7. [Adding a Project](#%EF%B8%8F-adding-a-project)
    1. [Images](#%EF%B8%8F-images-1)
    2. [Image Styling](#%EF%B8%8F-image-styling)
8. [Employees](#-employees)

## Getting started

* Clone this repository by typing `git clone https://bitbucket.org/insightcreative/matthews-tire` in Terminal. Sign in with your BitBucket login.
* Open the folder that is downloaded in your text editor to make changes.
* To see the site locally, change into your local copy with `cd path/to/your/repo` and then serve the site with `jekyll serve` and go to http://localhost:4000. Once this site is converted into a Statamic theme, you will need [MAMP](https://www.mamp.info/) to run a server and view the site.

## Contributing

This project is managed in Insight's [Asana](http://asana.com). Follow the workflow instructions there for working on the site.

## File structure

### 1. Pages

Each individual page is located with the folder with its corresponding name.

### 2. blog

All blog posts are located inside the blog/\_posts directory. For these, use the date of the day you would like the blog to get posted.   

### 3. Images

*There was no previous documentation so I'm not sure if there was anything special set up for image uploads to this site*

Images are simply stored in the img folder

### 4. data

Information for jobs, locations, promotions, services, and testimonials can all be found here in the data folder

### 5. Site

The \_site directory is the compiled directory with all of the final files. The contents of this folder is what will be uploaded to the actual website.

### 6. Styles

Styles are held in the main.css file in the css folder

## Deployment Workflow

1. When you start working on the site, do a `git pull origin master` with the remote repository to update your local copy in case there were any changes.

2. Then create a new branch with `git branch <branch-name>` and switch into it with `git checkout <branch-name>`.

3. Make the changes you want to make in the new branch, and commit them in that branch.

4. Switch back into the master branch and update it again with another `git pull origin master` in case there were more changes after you made your branch.

5. Merge in your branch with `git merge <branch-name>`. If there are merge conflicts, it will tell you and we will figure out the best way to handle that, TBD.

6. Delete the old branch because you probably don't need it anymore with `git branch -d <branch-name>`.

7. Push your updated master branch to BitBucket with `git push origin master`.

8. Right click on Matthews Folder to Run "GIT BASH HERE"

9. In your command prompt type  "jekyll serve", this will convert the changed files into HTML and put them in the \_site folder

10. Open FileZilla and connect to the Matthews Tire server

11. Drag contents of \_site folder from Matthews folder on C Drive to httpdocs on FILE ZILLA

## Deployment

Deployment is handled with [git-ftp](https://github.com/git-ftp/git-ftp). Edit your `.git/config` file in your local repository or follow the [git-ftp instructions](https://github.com/git-ftp/git-ftp/blob/develop/man/git-ftp.1.md) to set up git-ftp for both the development and live server.

*This no longer is connected, follow the steps to upload with FileZilla instead*

## Adding a Blog post

1. Create a new markdown file or .md file in the blog Folder

2. In your head enter in your layout type layout: post

3. Enter in the title of your post

4. Enter in the category of your post, if you have one

5. add and commit new file and run jekyll serve to convert markdown file into html and upload to the server

### Adding a blog post images
*I'm not sure if there is anything special setup for images, there's no documentation for how this was built*

1. Select your blog image and add it to the img folder in your repository

2. Add the image to the markdown file for your blog post

3. Commit your changes to BitBucket

4. Run Jekyll Serve if you aren't already

5. Add those new markdown and image files from the \_site folder to the appropriate folders in FileZilla on the server

## Adding Matthews Monthly Promo to the Promotions Pages

1. Add the final promo image in the img folder

2. Navigate to your sites \_data folders

3. Open up your "promotions.yml" file. This is where the data for the promotions are stored

4. Decide which promotion you are needing to change. The lead promotion with large graphic is titled lead promotion it will look something like this

  ```
  title: Lead promotion
  lead: true
  image: matthews-september-2018-offer.jpg
  disclaimer: ''
  ```
  The other promotions are simply listed without the lead: true element ex:
  ```
  title: "Manager's Special!"
  description: $25 off any service over $200 at all Matthews Tire locations.
  disclaimer: Most vehicles. Some restrictions apply. See store for details. Excludes tires. No commercial accounts.
  ```
