import React from "react";
import styles from './Description.module.css';

const RecipeAuthor = () => {
    let authorLink = "https://smittenkitchen.com/";
    let authorPhoto = "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2006/06/deb-perelman-headshot-2017.jpg?w=640&ssl=1";
    let authorName = "Deb Perelman";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Photo of recipe author, Deb Perelman" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Smitten Kitchen</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Greek Salad with Lemon and Oregano</h1>
                    <p>Venture to the Greek isles with this refreshing medley of Mediterranean flavors.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;