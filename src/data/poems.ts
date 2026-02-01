export interface Poem {
    id: string;
    title: string;
    slug: string;
    category: string;
    date: string;
    excerpt: string;
    content: string; // HTML content for rich formatting
}

export const poems: Poem[] = [
    {
        id: '1',
        title: "The Truth Within",
        slug: "the-truth-within",
        category: "Masks",
        date: "2024",
        excerpt: "I seem happy right? You see no new cuts on my wrists...",
        content: `
            <p>I seem happy right?</p>
            <p>You see no new cuts on my wrists</p>
            <p>A smile on my lips</p>
            <p>You hear me laugh or crack a joke</p>
            <br/>
            <p>But did you look into my eyes and see the sorrow that lyes there?</p>
            <p>Did you see the demons inside waiting for me to be alone so they can come out?</p>
            <p>Did you feel the cold lifeless touch of my skin?</p>
            <br/>
            <p>My friend If you only opened your eyes to the darkness inside me, you'd see the truth that lies within</p>
        `
    },
    {
        id: '2',
        title: "Sober Thoughts (Pt. 1)",
        slug: "sober-thoughts-pt-1",
        category: "Reflection",
        date: "2024",
        excerpt: "I fix everyone I love, but in the end I have no strength left to heal myself...",
        content: `
            <p>I fix everyone I love, but in the end I have no strength left to heal myself...</p>
            <br/>
            <p>When I see my loved ones happy , it's like all their happiness transfers to me, even though I haven't experienced the movement that they are in.</p>
            <br/>
            <p>Yet I feel empty from the inside knowing that nobody ever feels the same towards me.</p>
            <p>There is a point in my life where I hated myself for being myself " I guess trauma makes you think those things"</p>
            <p>But it's the phase after that that made me strong enough to go through anything..the problem is I don't know whether to be happy or sad for that..</p>
            <br/>
            <p>Guess my life has more horrific entertainment than i expected...</p>
        `
    },
    {
        id: '3',
        title: "Akhira",
        slug: "akhira",
        category: "Heartbreak",
        date: "2024",
        excerpt: "Leaving me was okay. People leave me all the time...",
        content: `
            <p>Leaving me was okay</p>
            <p>People leave me all the time</p>
            <p>I'm used to it.what hurts</p>
            <p>Like hell is when you made me</p>
            <p>Feel so damm special yesterday ,</p>
            <p>And then make me feel</p>
            <p>So unwanted today...</p>
        `
    },
    {
        id: '4',
        title: "Power is Power",
        slug: "power-is-power",
        category: "Love Dynamics",
        date: "2024",
        excerpt: "It's about power. When you're hot, you hold the power...",
        content: `
            <p>It's about power.</p>
            <p>When you're hot, you hold the power. You can make guys go weak at the knees with just a smile. Mesmerize them with your charm. Make them fall madly, desperately, hopelessly in love with you. That's how much influence you wield. Why wouldn't you be confident? Why would you settle? But then one day, you meet this guy. You admire him from afar. Watch and hide. Make yourself small to not draw his attention while you carefully scrutinise his every move. You are dazed and paralysed. He's not like anyone you've ever met before. He's charming. He's intelligent. He's irresistible. You fall for him. Fall hard.</p>
            <br/>
            <p>And suddenly you're no longer the one in control. He's the one who now holds the power over you. The power to make you or break you. The power to send butterflies fluttering through your stomach. And the power to rip your heart and shred it into a million pieces.</p>
            <br/>
            <p>Tell me, would you still feel confident? Tell me, would you not be terrified?</p>
        `
    },
    {
        id: '5',
        title: "Unannounced",
        slug: "unannounced",
        category: "Loss",
        date: "2024",
        excerpt: "You made me feel human again. Your touch, your laughter, your breath...",
        content: `
            <p>You came Unannounced !</p>
            <br/>
            <p>You made me feel human again. Your touch, your laughter, your breath, everything showed me what</p>
            <p>it is like being a human:</p>
            <p>a living, breathing person.</p>
            <br/>
            <p>You came into my life at a time when I thought everything was against me, everything would kill me. You showed me everything I had to live and fight for.</p>
            <p>In that short period I called you mine, you made me feel like there were galaxies in my veins and like the stars made their home in my eyes.</p>
            <br/>
            <p>I'll forever be grateful to the universe for bringing you to me, and at the same time I'll never forgive it for taking you away.</p>
        `
    },
    {
        id: '6',
        title: "Mess",
        slug: "mess",
        category: "Resilience",
        date: "2024",
        excerpt: "I remember the first time I saw your brown eyes...",
        content: `
            <p>I remember the first time I saw your brown eyes and your brownish black hair and your white coloured t-shirt and your smile.</p>
            <br/>
            <p>Even though it was the first time, I knew that there was a connection between us.</p>
            <br/>
            <p>But now i am at a stage where I wish i could leave with my memories, my love But my heart, is a mess.</p>
            <p>This year i met the most broken version of me and the strongest it is why I'm proud of myself because I survived the days that I thought I couldn't because I've never let anyone see me at my weakest .</p>
            <p>I don't think people realise how hard it is to rediscover the person you were before the depression or even try to remember your own personality</p>
        `
    },
    {
        id: '7',
        title: "Whispers in the Dark",
        slug: "whispers-in-the-dark",
        category: "Humanity",
        date: "2024",
        excerpt: "Love's ember flickers, a fragile flame...",
        content: `
            <p>Love's ember flickers, a fragile flame,</p>
            <p>Secrets burn hot on trembling lips.</p>
            <p>The weight of words unsaid, our shame</p>
            <p>Responsibility's cold fingertips.</p>
            <br/>
            <p>Fear lurks in shadows, ever near,</p>
            <p>While friendship's light holds back the night.</p>
            <p>But longing gnaws, year after year,</p>
            <p>For paths untrod and lost delight.</p>
            <br/>
            <p>Death waits patient, silent friend,</p>
            <p>Our final dance, our last embrace.</p>
            <p>Yet in this moment, we pretend</p>
            <p>That time stands still, if for a space.</p>
            <br/>
            <p>We fumble forward, hand in hand,</p>
            <p>Through joy and grief, through storm and calm.</p>
            <p>Imperfect, human, as we stand</p>
            <p>In love's wild chaos, find our balm.</p>
        `
    },
    {
        id: '8',
        title: "Affirmation of Longing",
        slug: "affirmation-of-longing",
        category: "Desire",
        date: "2024",
        excerpt: "I WOULD DO ABSOLUTELY ANYTHING RIGHT NOW TO BE ABLE TO SNUGGLE UP NEXT TO YOU...",
        content: `
            <p class="uppercase font-bold tracking-wide">I WOULD DO ABSOLUTELY ANYTHING RIGHT NOW TO BE ABLE TO SNUGGLE UP NEXT TO YOU, BURY MY HEAD IN YOUR CHEST, AND INTERLOCK MY FINGERS WITH YOURS.</p>
            <br/>
            <p class="uppercase font-bold tracking-wide">I'D BE ABLE TO LOOK UP AT YOU AND SMILE WHENEVER I WANTED TO. I'D BE ABLE TO LEAN UP AND KISS YOU WHENEVER I WANTED TO. I'D BE ABLE TO TELL YOU HOW I FEEL ABOUT YOU WHENEVER I WANTED TO.</p>
            <br/>
            <p class="uppercase font-bold tracking-wide">ALL I NEED IS JUST A WORD OF AFFIRMATION THAT I MEAN SOMETHING TO YOU. I WOULD THEN GO TO DISTANCES THAT I HAVE NEVER BEEN BEFORE FOR YOU WITHOUT GETTING HURT LIKE ALWAYS...</p>
        `
    },
    {
        id: '9',
        title: "The Ache of Absence",
        slug: "the-ache-of-absence",
        category: "Friendship",
        date: "2024",
        excerpt: "The ache of absence, a hollowed heart, A friend, a confidant, now torn apart...",
        content: `
            <p>The ache of absence, a hollowed heart,</p>
            <p>A friend, a confidant, now torn apart.</p>
            <p>Memories of laughter, whispers, and tears,</p>
            <p>Echoes of moments, through all the years.</p>
            <br/>
            <p>We once shared secrets, hopes, and fears,</p>
            <p>Together we weathered life's joys and sneers.</p>
            <p>But now, the silence is deafening loud,</p>
            <p>A chasm deep, where our bond once proud.</p>
            <br/>
            <p>I miss the way you'd listen, eyes aglow,</p>
            <p>The way your smile could light the darkest woe.</p>
            <p>I miss our midnight talks, our silly fights,</p>
            <p>Our promises to stand, through life's plodding nights.</p>
            <br/>
            <p>Time, a thief, stole you away from me,</p>
            <p>Leaving only shadows, where you used to be.</p>
            <p>I'm left to wonder, what went awry,</p>
            <p>Why our paths diverged, and our bond did die.</p>
            <br/>
            <p>Yet, in my heart, a flame still burns bright,</p>
            <p>A beacon of hope, that our friendship will take flight.</p>
            <p>Perhaps someday, our paths will cross again,</p>
            <p>And we'll rekindle the love, the laughter, and the pain.</p>
            <br/>
            <p>Until then, I'll hold on to what we had,</p>
            <p>Cherish the memories, and the love we once shared, so sad.</p>
            <p>For in the end, it's not the distance that defines,</p>
            <p>But the love we shared, the bond that forever shines.</p>
        `
    },
    {
        id: '10',
        title: "Imagination vs Reality",
        slug: "imagination-vs-reality",
        category: "Longing",
        date: "2024",
        excerpt: "U ever just sit up at night thinking about life. What it would be like if u didn't meet someone...",
        content: `
            <p>U ever just sit up at night thinking about life. What it would be like if u didn't meet someone or what it would be like if u went up to that person. If u didn't miss the chance or if u just went for it. Do u ever just stay up thinking about what ur person is doing. When u will meet that one person. The person who will change ur life forever. Who will make a mark u could never erase. U lay there and wonder what they're doing right now. If u have already met that person, whether u know them or maybe u glanced a view of them while ur walking down the street.</p>
            <br/>
            <p>U ever wonder how it feels to love someone endlessly that no matter what they do u would go back in a second. They're just that special to u. And not only that, but it's actually that special to them. They're ur whole world and ur there. No matter what u do they'd love u even in the worst way. Someone u could love so much and care for with all ur heart. The one that u could give ur all to. Someone who would make u feel worth it.</p>
            <br/>
            <p>Someone who would make u feel as if u have a purpose in life. No matter how hard it got, u knew u had to live, to survive, just to be with them. One person u could give ur all to. U could give all the love in ur heart and they would actually take it in without lust, without lies, without fear that they'd take it and use it to abuse it. Someone who u know won't leave u even after seeing ur worst of the worst. Someone who u can share ur breath with. The one who could put a smile on ur face even at the darkest moments. Someone u could love without doubt....</p>
            <br/>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <br/>
            <p>Well but reality is harsh it's never going to let your imagination turn to reality.</p>
            <br/>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <br/>
            <p>The system won't allow you to think and it won't allow you to escape not even by death.....</p>
            <br/>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
            <p class="text-center italic">.</p>
        `
    },
    {
        id: '11',
        title: "Seasonal People",
        slug: "seasonal-people",
        category: "Acceptance",
        date: "2024",
        excerpt: "i know now that this is how it works, you don't get to keep everyone in your life forever...",
        content: `
            <p>i know now that this is how it works, you don't get to keep everyone in your life forever.</p>
            <p>and there are some people that are just meant</p>
            <p>to be a sunrise for you,</p>
            <p>a light to pull you out of the darkness,</p>
            <p>there are friends,lovers,</p>
            <p>relationships that are seasonal.</p>
            <br/>
            <p>no matter how deep of a conversation you had with that person at 2am,</p>
            <p>no matter how much you shared your heart,</p>
            <p>even if you can still draw the lines of their smile,there almost always comes a time to move on, a time to let go,and regardless of the letting go,</p>
            <p>i just wanted you to know,</p>
            <p>that you're always going to feel a little bit like home to me.</p>
        `
    },
    {
        id: '12',
        title: "Her Smile, My Anchor",
        slug: "her-smile-my-anchor",
        category: "Friendship",
        date: "2024",
        excerpt: "Through the chaos, her smile shone bright...",
        content: `
            <p>Through the chaos, her smile shone bright,</p>
            <p>A beacon that guided me through the night.</p>
            <p>A friend so dear, a bond so true,</p>
            <p>She became the priority in all I do.</p>
            <br/>
            <p>Her laughter, a melody that soothed my soul,</p>
            <p>Her presence, a warmth that made me whole.</p>
            <p>In her eyes, a depth of understanding,</p>
            <p>A companion on whom I could keep landing.</p>
            <br/>
            <p>As seasons changed, our friendship grew,</p>
            <p>A bond that time could never undo.</p>
            <p>Through ups and downs, she stood by my side,</p>
            <p>A constant companion, a friend to confide.</p>
            <br/>
            <p>Her radiance illuminated my darkest days,</p>
            <p>Her kindness a reminder of life's gentle ways.</p>
            <p>A priority she became, etched in my heart,</p>
            <p>A friend I could never bear to part.</p>
        `
    },
    {
        id: '13',
        title: "The Guiding Light",
        slug: "the-guiding-light",
        category: "Cherished",
        date: "2024",
        excerpt: "With her by my side, the world seemed brighter...",
        content: `
            <p>With her by my side, the world seemed brighter,</p>
            <p>Our bond, unbreakable, our friendship, tighter.</p>
            <p>A girl who became my guiding light,</p>
            <p>A friend I'll cherish, through day and night.</p>
            <p>It still hurts sometimes..</p>
        `
    },
    {
        id: '14',
        title: "The Good Times",
        slug: "the-good-times",
        category: "Grief",
        date: "2024",
        excerpt: "I'll catch myself thinking about it at night. While I'm healing and growing...",
        content: `
            <p>I'll catch myself thinking about it at night. While I'm healing and growing I feel like I have no one to share it with. That one part that I could tell everything to is gone and has been for a long time. The long nights are filled with silence as I'm processing through my trauma and each new discovery or milestone I'm met with a blank screen and a missing piece of my heart. We've been dead a long time but some nights it's nice to look back on the good times. Because there were some good times.</p>
            <br/>
            <p>There was also lack of communication, trust, toxic behaviors, un-dealt with trauma, and a list of other red flags. But the good times were that it wasn't happening. The times where we confided in each other and we're laughing being complete lunatics and understanding each other on a wavelength that no one else could keep up with. Even to this day it's hard to find someone who matches that intensity. I miss that. I miss that wave. I'll catch myself wondering, "what if I was wrong?"" "what if we could try again." But in all reality, you were gone long before we ever said goodbye. And so was I.</p>
        `
    },
    {
        id: '15',
        title: "Walls",
        slug: "walls",
        category: "Fear",
        date: "2024",
        excerpt: "There were walls between us that we never talked through...",
        content: `
            <p>There were walls between us that we never talked through. There were sides of me you never saw. And now you never will..</p>
            <p>And it is what I fear so much. That what If you see the way I see myself you'd come to resent me disgust me.. and you would leave me at a point and I would be so lost that there's no way back home.. so please don't leave me I beg of you ......</p>
        `
    },
    {
        id: '16',
        title: "Worthless",
        slug: "worthless",
        category: "Trauma",
        date: "2024",
        excerpt: "I'm dreading these thoughts. Verbal abuse, a sad youth...",
        content: `
            <p>I'm dreading these thoughts</p>
            <p>Verbal abuse, a sad youth</p>
            <p>The more you say</p>
            <p>The more I realize</p>
            <p>I've never been enough</p>
            <br/>
            <p>I hate the way</p>
            <p>It ruins my day</p>
            <p>And the power you gain When tears fall down my face</p>
            <p>I'm foolish to admit I believe you</p>
            <p>Nobody has ever really, truly said</p>
            <p>I am enough</p>
            <br/>
            <p>Maybe it's something</p>
            <p>I've got to find it on my own</p>
            <p>Because you downplay my achievements And downgrade my hard work</p>
            <p>But say you love and know me the most</p>
            <br/>
            <p>I'm breaking down And building up walls</p>
            <p>That trapped me in this evil hopelessness Burned out mentally</p>
            <p>Damn this discouragement</p>
            <p>I just feel worthless Seeking validation</p>
            <p>While my heart keeps breaking</p>
        `
    },
    {
        id: '17',
        title: "An Unexpected Bond",
        slug: "an-unexpected-bond",
        category: "Connection",
        date: "2024",
        excerpt: "I never thought that you would be, Someone so dear to me...",
        content: `
            <p>I never thought that you would be,</p>
            <p>Someone so dear to me.</p>
            <p>A stranger that soon felt like home,</p>
            <p>A kindred spirit I had known.</p>
            <br/>
            <p>With you I need not pretend,</p>
            <p>My truest self I can extend.</p>
            <p>No filter, no facade required,</p>
            <p>Together we are inspired.</p>
            <br/>
            <p>Though squabbles led to time apart,</p>
            <p>You still reside within my heart.</p>
            <p>Misunderstandings fade away,</p>
            <p>When two are meant to stay.</p>
            <br/>
            <p>Our bond is different from the rest,</p>
            <p>Of this connection I'm so blessed.</p>
            <p>You've become my closest friend,</p>
            <p>This is a love that need not end.</p>
            <br/>
            <p>What we have is true and right,</p>
            <p>Our souls are intertwined so tight.</p>
            <p>Fate brought us together, now I see,</p>
            <p>You were meant for me, and me for thee.</p>
        `
    },
    {
        id: '18',
        title: "People Scare Me",
        slug: "people-scare-me",
        category: "Trust",
        date: "2024",
        excerpt: "people scare me because you can never tell what they're thinking or feeling...",
        content: `
            <p>people scare me</p>
            <p>because you can never tell</p>
            <p>what they're thinking or feeling</p>
            <br/>
            <p>because people lie people lie</p>
            <p>all the damn time</p>
            <p>with their words their smiles</p>
            <p>their eyes people lie</p>
            <p>and the thing is, they</p>
            <p>tend to be good at it</p>
            <br/>
            <p>so good at it that</p>
            <p>they forget they're lying</p>
            <p>they forget they're hurting others</p>
            <p>they forget the power</p>
            <p>they have the power to hold</p>
            <p>someone's heart in their hand</p>
            <p>and at any given moment,</p>
            <p>they could squeeze just a bit too hard...</p>
        `
    },
    {
        id: '19',
        title: "Cultivation",
        slug: "cultivation",
        category: "Fear of Love",
        date: "2024",
        excerpt: "I've always been scared of you... you're the first Person I actually personally loved...",
        content: `
            <p>I've always been scared of you ....you're the first Person I actually personally loved with no influence besides the universe bringing us together...I was afraid that you would hurt me or leave, like everyone else I held close to me...I'm understanding that's why I always went overboard the fear of losing you caused me to push you away ...I always knew you were pure and beautiful and something natural like a diamond or a rainbow...the fear of me not knowing if I could step up with you in life because my whole childhood I was told I was nothing and would be nothing, I was dealing with trauma long before I could remember...</p>
            <br/>
            <p>the fear of you believing I was nothing, kept me on edge afraid that you.. I would lose you ...I was afraid that you weren't true that you would deceive me ...afraid that the uncontrollable love I had for you would be taken advantage of...anxiety flooded me everyday confused on how I should show you my love if you would think I was weak or not man enough...but in the end it came off as insecurities, controlling, abusive, ...I've never had anything not a pet not a home not love and when I thought I did i was taken away from me...</p>
            <br/>
            <p>I'm still afraid of you ...that you will never remember my love was real ...that you will forget that I always was there but lost in decision and confused by depression anxiety and trauma...it's like I made you sick and now you resent me... yet still i want you to be there for me no matter what I cannot stop foreseeing the evil thoughts that poision my mind...</p>
            <br/>
            <p>My heart, it keeps aching no matter how much I try to keep positive no matter who I talk to with... The saddest thing is I have been having these hallucinations since the moment you were far from me. These hallucinations conjure up without my intention they consume me yet I feel that false hope for you when I talk with my hallucinations that take your shape... Please I don't know what to do I'm drowning. I'm being pulled down by my very own thoughts and my introspection seems to be too broken. Losing human emotions, conjuring demons , manipulating people, I don't even know what I've become..... Please I want to be saved.. even if it means to die...</p>
        `
    },
    {
        id: '20',
        title: "A Special Friendship",
        slug: "a-special-friendship",
        category: "Bond",
        date: "2024",
        excerpt: "I never expected our paths to cross, Or that in you, I'd find no loss...",
        content: `
            <p>I never expected our paths to cross,</p>
            <p>Or that in you, I'd find no loss.</p>
            <p>Just a kindred spirit, wise and kind,</p>
            <p>With whom I'd share a special bond to find.</p>
            <br/>
            <p>Open and honest, wearing no disguise,</p>
            <p>All filters fade when I look in your eyes.</p>
            <p>Your gentle ways and thoughtful mind,</p>
            <p>Provide the comfort that is so hard to find.</p>
            <br/>
            <p>We've had our conflicts, said things we regret,</p>
            <p>But true friends can forgiveness beget.</p>
            <p>For it's not the petty spats that define,</p>
            <p>But the care and support that brightly shine.</p>
            <br/>
            <p>Now I see that fate brought you here,</p>
            <p>To fill my life with so much cheer.</p>
            <p>People come and go, but friends like you</p>
            <p>Are faithful, true, and oh so few.</p>
            <br/>
            <p>What we share is a precious gift,</p>
            <p>Of laughter, wisdom, joy so swift.</p>
            <p>You've become the sibling I've never had,</p>
            <p>A partner through good times and bad.</p>
            <br/>
            <p>This special friendship I'll forever treasure,</p>
            <p>A bond like ours is the richest measure.</p>
            <p>As kindred spirits, we're interlaced,</p>
            <p>By trust and love that will stand the test.</p>
        `
    }
];
