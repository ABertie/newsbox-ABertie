export const ORIGINAL_CATEGORIES = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sundayreview", "t-magazine", "technology", "theater", "travel", "upshot", "us", "world"]

export const CATEGORIES_ICONS = [{
        category: "arts",
        icon: "palette"
    },{
        category: "automobiles",
        icon: "car"
    },{
        category: "books",
        icon: "book"
    },{
        category: "business",
        icon: "briefcase"
    },{
        category: "fashion",
        icon: "shirt"
    },{
        category: "food",
        icon: "utensils"
    },{
        category: "health",
        icon: "heart-pulse"
    },{
        category: "home",
        icon: "timeline"
    },{
        category: "insider",
        icon: "people-group"
    },{
        category: "magazine",
        icon: "newspaper"
    },{
        category: "movies",
        icon: "clapperboard"
    },{
        category: "nyregion",
        icon: "location-dot"
    },{
        category: "obituaries",
        icon: "skull"
    },{
        category: "opinion",
        icon: "brain"
    },{
        category: "politics",
        icon: "landmark"
    },{
        category: "realestate",
        icon: "house-user"
    },{
        category: "science",
        icon: "flask"
    },{
        category: "sundayreview",
        icon: "calendar-day"
    },{
        category: "t-magazine",
        icon: "t"
    },{
        category: "technology",
        icon: "microchip"
    },{
        category: "theater",
        icon: "masks-theater"
    },{
        category: "travel",
        icon: "plane"
    },{
        category: "upshot",
        icon: "clipboard-check"
    },{
        category: "us",
        icon: "users"
    },{
        category: "world",
        icon: "earth-americas"
    }
]

export let order 

if (!localStorage.getItem("CategoriesOrder")) order = ORIGINAL_CATEGORIES
else order = localStorage.getItem("CategoriesOrder").split(",")
export let categories 

if (!localStorage.getItem("SavedCategories")) {
    categories = order
    localStorage.setItem("SavedCategories", categories)
}
else categories = localStorage.getItem("SavedCategories").split(",")

export let savedArticles

if (!localStorage.getItem("SavedArticles")) {
    savedArticles = ""
    localStorage.setItem("SavedArticles", savedArticles)
}
else savedArticles = localStorage.getItem("SavedArticles").split(",")