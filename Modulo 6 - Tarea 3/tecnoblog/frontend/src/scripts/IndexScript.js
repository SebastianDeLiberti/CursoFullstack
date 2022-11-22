import { useEffect } from 'react';


function IndexScript() {

    useEffect(() => {

        let last_posts = document.getElementById("last_posts");
        let last_guides = document.getElementById("last_guides");
        let last_news = document.getElementById("last_news");

        if(last_posts.childElementCount > 9) {

            for (let x = 0; x < last_posts.childElementCount; x++) {

                if (x > 9) last_posts.children[x].style.display = "none";

            }

        }

        if (last_guides.childElementCount > 5) {

            for (let x = 0; x < last_guides.childElementCount; x++) {

                if (x > 3 && x < last_guides.childElementCount - 1) last_guides.children[x].style.display = "none";

            }

        }

        if (last_news.childElementCount > 5) {

            for (let x = 0; x < last_news.childElementCount; x++) {

                if (x > 3 && x < last_news.childElementCount - 1) last_news.children[x].style.display = "none";

            }

        }

    }, []);

}

export default IndexScript;