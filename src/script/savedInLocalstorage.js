export const ORIGINAL_CATEGORIES = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]
ORIGINAL_CATEGORIES.sort()

export let categories 

if (!localStorage.getItem("SavedCategories")) {
    categories = ORIGINAL_CATEGORIES
    localStorage.setItem("SavedCategories", categories)
}
else categories = localStorage.getItem("SavedCategories").split(",")

export let savedArticles

if (!localStorage.getItem("SaveArticles")) {
    savedArticles = ""
    localStorage.setItem("SaveArticles", savedArticles)
}
else savedArticles = localStorage.getItem("SaveArticles").split(",")