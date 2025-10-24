Vue.component('blog-header', {
    props: ['title'],
    template: `
    <header>
      <span>{{ title }}</span>
      <blog-nav></blog-nav>
    </header>
    `
});

Vue.component('blog-nav', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </nav>
    `
});

Vue.component('blog-photo', {
    props: ['src', 'alt'],
    template: `<aside id='photos'><img :src='src' :alt='alt' width='100%' class='img-fluid rounded'></aside>`
});

Vue.component('blog-comments', {
    props: ['comments'],
    data: function() {
        return {
            showBox: false,
            authorInfo: {},
            profileImg: 'images/profile.png',
            authorData: {
                'Brianna': {
                    name: 'Brianna',
                    level: 'Novice',
                    bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!'
                },
                'LINH': {
                    name: 'LINH',
                    level: 'Newcomer',
                    bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
                },
                'CATHERINE LEONARDO': {
                    name: 'CATHERINE LEONARDO',
                    level: 'Mentor',
                    bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!'
                },
                'KALI': {
                    name: 'KALI',
                    level: 'Novice',
                    bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I\'m a food whore! Invite me over for dinner and I\'ll be there!'
                }
            }
        }
    },
    methods: {
        showAuthor(author) {
            this.authorInfo = this.authorData[author] || {};
            this.showBox = true;
        }
    },
    template: `
        <section id='blogposts'>
            <div v-for='comment in comments' class='post card mb-3'>
                <div class="card-body">
                  <img :src="profileImg" alt="profile" class="profile" @click="showAuthor(comment.author)">
                  <span class='author font-weight-bold'>{{ comment.author }}</span> —
                  <span class='date text-muted'>{{ comment.date }}</span>
                  <span class='reply badge badge-info ml-2'>REPLY</span>
                  <p class="mt-2">{{ comment.text }}</p>
                </div>
            </div>
            <div v-if="showBox" class="author-box">
                <div class="author-box-content">
                    <span class="close" @click="showBox=false">&times;</span>
                    <h2>{{ authorInfo.name }}</h2>
                    <p><b>Foodie Level:</b> {{ authorInfo.level }}</p>
                    <p><b>Bio:</b> {{ authorInfo.bio }}</p>
                    <button class="btn btn-light btn-sm" @click="showBox=false">Close</button>
                </div>
            </div>
        </section>
    `
});

Vue.component('blog-footer', {
    props: ['copyright'],
    template: `<footer>&copy; {{ copyright }}</footer>`
});

new Vue({
    el: '#foodblog-app',
    data: {
        blog: {
            title: 'Food Blog',
            photo: {
                src: 'images/chili.jpg',
                alt: 'White Chicken Chili'
            },
            comments: [
                {
                    author: 'Brianna',
                    date: 'February 18, 2021 @ 3:30 pm',
                    text: `Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!`
                },
                {
                    author: 'LINH',
                    date: 'February 15, 2021 @ 9:46 am',
                    text: `I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!`
                },
                {
                    author: 'CATHERINE LEONARDO',
                    date: 'February 13, 2021 @ 12:58 pm',
                    text: `I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.`
                },
                {
                    author: 'KALI',
                    date: 'February 13, 2021 @ 11:31 am',
                    text: `This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!`
                }
            ],
            copyright: 'Copyright FOOD BLOG'
        }
    }
});
