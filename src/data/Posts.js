const Posts = [
  {
    id: "1",
    author: "Alice Morgan",
    authorId: "alice",
    title: "My First Hackathon: Lessons I’ll Never Forget",
    description: `Last year, I participated in my first all-women hackathon. I had just started learning React, barely understood Git, and was terrified of public speaking. I almost didn't apply, but a friend convinced me to try. I joined a team of three other amazing women. We brainstormed ideas late into the night and built a simple prototype using Firebase and React.

  We faced challenges—Git conflicts, last-minute bugs, missing features. But we also laughed, cheered each other on, and stayed fueled by coffee and adrenaline. We didn’t win, but we demoed with pride and received valuable feedback from the judges.

  That experience changed me. I realized hackathons aren’t about winning—they’re about learning, collaborating, and proving to yourself that you belong. Since then, I’ve joined two more hackathons and mentored in one. Hackathons gave me confidence, friendships, and a space where women in tech truly shine.`,
    date: "28 July 2025",
  },
  {
    id: "2",
    author: "Sophia Bennett",
    authorId: "sophia",
    title: "How I Got My First Remote Dev Job Without a CS Degree",
    description: `I didn’t come from a traditional tech background. I studied psychology and worked as a barista. But I was fascinated by logic and problem-solving. During the pandemic, I discovered freeCodeCamp and spent hours learning HTML, CSS, and JavaScript. I built simple pages, then more complex apps, and posted everything on GitHub.

  I applied to over 70 jobs—mostly rejections. But I treated each one as practice. I rewrote my resume, tailored my portfolio, and improved my Git skills. After 7 months, I got a message on LinkedIn. A startup was looking for a junior frontend dev. I interviewed, showed them my projects, and got hired—remotely!

  Today, I work with a distributed team across 3 time zones. I still don’t have a CS degree—but I ship real code every day. What matters is persistence, proof of work, and passion. Your background doesn’t define your ceiling.`,
    date: "27 July 2025",
  },
  {
    id: "3",
    author: "Alice Morgan",
    authorId: "alice",
    title: "Imposter Syndrome in Tech is Real — But Beating It is Possible",
    description: `In my first developer job, I constantly felt like a fraud. I would write code, push it, and panic—“What if I broke something?” Everyone around me seemed smarter, faster, more experienced. I started staying quiet in meetings, afraid to sound silly.

  One day, my mentor pulled me aside and said, “Confidence isn’t knowing everything. It’s trusting your ability to figure things out.” That stuck with me. I began journaling my wins—solved bugs, completed features, even small things like writing clear commits.

  I also talked about it with peers and realized I wasn’t alone. Imposter syndrome affects even senior engineers. Over time, I learned to accept that growth feels uncomfortable. Today, I still get nervous, but I don’t let it silence me. I remind myself: I earned my place. I’m learning, improving, and helping others. That’s what matters.`,
    date: "26 July 2025",
  },
  {
    id: "4",
    author: "Sophia Bennett",
    authorId: "sophia",
    title: "Why I Started a Tech Blog — And How It Changed My Career",
    description: `I used to think I wasn’t “senior enough” to share knowledge. But after solving the same bug three times in three projects, I decided to write about it. That post—“Fixing CORS Issues with Express and React”—got more views than I expected. Developers messaged me thanking me. I was shocked.

  That small act gave me confidence. I started publishing once a month—simple guides, project breakdowns, lessons learned. Soon, I had recruiters mentioning my blog during interviews. I got invited to speak at local meetups and even got freelance offers.

  Blogging helped me reflect, communicate better, and build credibility. Most importantly, it showed me that sharing what you know—even if it’s basic—can help someone else. Don’t wait to become an expert. If you’ve solved a problem, write it down. The world needs more authentic voices in tech.`,
    date: "25 July 2025",
  },
  {
    id: "5",
    author: "Alice Morgan",
    authorId: "alice",
    title: "What It's Like Being the Only Woman in a Dev Team",
    description: `When I joined my first dev job, I was the only woman on a team of 12. During my first few weeks, I felt invisible. I spoke softly during meetings and second-guessed my ideas. I’d practice my questions before asking, fearing I’d sound “dumb.”

  But one day, I realized: I was hired for a reason. My ideas were valid, and my silence wasn’t helping anyone. So I started contributing—slowly at first. I gave feedback on PRs, raised accessibility suggestions, and led a UI refactor.

  My confidence grew. I even launched a mini lunch series for knowledge sharing, and guess what? My teammates were incredibly supportive. Now I mentor new female hires and help create inclusive onboarding.

  Being the only woman in a room is hard—but it’s also a chance to lead, represent, and change culture for the better.`,
    date: "24 July 2025",
  },
  {
    id: "6",
    author: "Sophia Bennett",
    authorId: "sophia",
    title: "Building My First Full Stack App with MERN — What Went Right & Wrong",
    description: `I challenged myself to build a full MERN app—a job board for junior developers. Setting up the frontend was smooth. I used React, styled it with MUI, and deployed it with Vercel. But backend? Total chaos. My Node server crashed frequently, and CORS errors became my nightmare.

  I learned to read error logs, structure my Express routes properly, and configure MongoDB connections safely. I also spent a full weekend figuring out JWT authentication.

  When it finally worked, I cried a little. That app wasn’t perfect—but it was mine. I deployed it and shared it in a developer community. I got feedback, bug reports, and even a collaboration request!

  Building full stack stretched me beyond tutorials. It taught me patience, debugging, and resilience. You don’t need to build something fancy. Just build something real.`,
    date: "23 July 2025",
  },
  {
    id: "7",
    author: "Alice Morgan",
    authorId: "alice",
    title: "Attending My First Tech Conference as a Junior Dev",
    description: `When I bought my ticket to a local React conference, I almost didn’t go. I had imposter syndrome and feared I wouldn’t understand the talks. But I pushed myself. On the first day, I met two other junior women—and we stuck together.

  We attended sessions, asked questions, and even introduced ourselves to speakers. One speaker, a senior dev at a startup, shared her story—she had once felt like me. That talk lit a fire in me.

  I also got to try live coding challenges, collect swag, and attend a women-in-tech breakfast meetup. We shared struggles and support. It felt like I had found my tribe.

  Conferences aren’t just about tech. They’re about community. If you can attend one, go. Even if you’re scared—go. You’ll leave inspired and maybe a little braver.`,
    date: "22 July 2025",
  },
  {
    id: "8",
    author: "Sophia Bennett",
    authorId: "sophia",
    title: "Why I Mentor Beginners in Tech — And You Should Too",
    description: `One day, a stranger messaged me on Twitter: “I love your blog. Can I ask about learning React?” I replied. That led to a 3-month mentoring relationship. She now has her first internship. That moment made me realize how little support some beginners have.

  I now run a free Saturday group call for beginners. We debug issues, share resources, and vent about errors. Mentoring doesn’t mean you’re perfect. It means you’ve made mistakes—and want to help others avoid them.

  I’ve grown more confident, articulate, and patient through mentoring. It’s mutual growth. And the gratitude I get back? It’s priceless.

  If you’re even 1 step ahead of someone, you can mentor. You don’t need a title—just time and kindness.`,
    date: "21 July 2025",
  },
  {
    id: "9",
    author: "Alice Morgan",
    authorId: "alice",
    title: "Switching From Manual QA to Frontend Dev — My Journey",
    description: `I spent 3 years in manual QA—writing test cases, clicking through UI elements, logging bugs. It was stable, but it didn’t excite me. I wanted to build things, not just break them.

  I started learning HTML, CSS, and then JavaScript. My weekends became project time. I built a simple to-do app, then a weather app using an API. Slowly, I picked up React.

  It wasn’t easy. I failed interviews. I struggled with state management. But I kept going. I took notes, rewrote bad code, and asked questions online.

  Eventually, I landed a frontend role at a startup. My QA experience helped me write better tests and anticipate edge cases.

  Don’t let your past lock your future. Career switches are possible—with grit and patience.`,
    date: "20 July 2025",
  },
  {
    id: "10",
    author: "Sophia Bennett",
    authorId: "sophia",
    title: "Remote Work Struggles No One Told Me About",
    description: `When I landed my first remote job, I was ecstatic. No commute, flexible hours, pajamas all day. But I wasn’t prepared for the isolation. I missed spontaneous team banter and face-to-face mentorship.

  Some days, I didn’t talk to anyone. Zoom fatigue hit hard. I started to feel disconnected and unmotivated.

  To cope, I joined remote dev communities, started daily check-in rituals, and scheduled virtual coffee chats with teammates. I created a dedicated workspace and made sure I “left work” at a set hour.

  Remote work is amazing—but it requires discipline, boundaries, and intentional connection. Don’t assume you’ll be fine just because you love code. Build your support system. And check in on your remote peers—they might need it too.`,
    date: "19 July 2025",
  },
];

export default Posts;
