const actions = {
  setLessons({ dispatch, commit }, data) {
    // data = testData // NOTE MIKE : delete this line and the api at the bottom
    // NOTE remove all duplicate lessons which avoids Vue warns duplicate keys this may cause update errors. Which it does
    data = [...new Map(data.map((item) => [item.title, item])).values()];

    dispatch("setTotalLessons", data);
    commit("setLessons", data);
    dispatch("setLessonPages", [...data]);
  },
  setLessonPages({ commit }, data) {
    const lessonItemsPerPage = 20;
    const result = new Array(Math.ceil(data.length / lessonItemsPerPage))
      .fill()
      .map(() => data.splice(0, lessonItemsPerPage));
    commit("setLessonPages", result);
  },
  setTotalLessons({ commit }, data) {
    commit("setTotalLessons", data.length);
  },
};

// const testData = [
//   {
//     title: 'What is money?',
//     duration: '288',
//     description:
//       'Money features in our lives every day but everyone has different views and understandings of it means to them. Jade and Joe discuss what money means to them and their futures. They decide to set up a vlog to help them learn more and make some money along the way.',
//     url: 'https://www.blackbullion.com/pathways/key-stage-4',
//     image: 'https://prodcontent.blackbullion.com/images/featured/lesson1.png',
//   },
//   {
//     title: 'Peer Pressure and Advertising',
//     duration: '130',
//     description:
//       'Advertising is something that we are all surrounded by - online, watching TV or driving past a billboard. It can influence us and those around us more than we might realise. In this video, Joe and Jade consider some of the issues around advertising but also peer-pressure before they go shopping. They realise how important it to start assessing what you want to take control of their money.  ',
//     url: 'https://www.blackbullion.com/pathways/key-stage-4',
//     image: 'https://prodcontent.blackbullion.com/images/featured/lesson2.png',
//   },
//   {
//     title: 'Needs, Wants and Budgeting',
//     duration: '269',
//     description:
//       'There are many things that we often consider as \u2018needs\u2019 but it might be worth taking a moment to think about whether this is what they actually are. You might find after a little thinking that it\u2019s just a \u2018want\u2019. Jade and Joe discuss the financial implications of this in their finance vlog and the importance of budgeting. ',
//     url: 'https://www.blackbullion.com/pathways/key-stage-4',
//     image: 'https://prodcontent.blackbullion.com/images/featured/lesson3.png',
//   },
//   {
//     title: 'Saving and Investment',
//     duration: '120',
//     description:
//       'Once you\u2019re earning you might want to think about spending but what about saving? What about investments? They seem like big ideas but can be quite interesting ways of making your money go further. Have you heard of ISAs or credit unions? Joe and Jade explore the options with savings and investments in this vlog.',
//     url: 'https://www.blackbullion.com/pathways/key-stage-4',
//     image: 'https://prodcontent.blackbullion.com/images/featured/lesson5.png',
//   },
//   {
//     title: 'Government and Tax',
//     duration: '304',
//     description:
//       'Tax is what we pay for a civilised society. Although people complain about paying tax all too often it\u2019s because they don\u2019t understand what the tax they are paying is being used for.  In Jade and Joe\u2019s next vlog they discover how tax is taken from your pay and the impact of having a system without taxation. \r\n',
//     url: 'https://www.blackbullion.com/pathways/key-stage-4',
//     image: 'https://prodcontent.blackbullion.com/images/featured/lesson4.png',
//   },
//   {
//     title: 'Credit and Debt',
//     duration: '256',
//     description:
//       'In the future, you may find yourself dealing with credit and debt. Jade and Joe find out that there can be good and bad debt. They also learn more about using credit cards and how keeping on top of your finances can help you avoid future debt.',
//     url: 'https://www.blackbullion.com/pathways/key-stage-4',
//     image: 'https://prodcontent.blackbullion.com/images/featured/lesson6.png',
//   },
//   {
//     title: 'Deals',
//     duration: '270',
//     description:
//       'Deals can be tempting but are they just a ploy to play on your emotions and make you buy things you don\u2019t really need? Many people are spending money on contracts for phones or paying more than they really need to on their utility bills because they don\u2019t shop around. Jade and Joe look at approaches to get the best deals and challenge ones that might be too good to be true. ',
//     url: 'https://www.blackbullion.com/pathways/key-stage-4',
//     image: 'https://prodcontent.blackbullion.com/images/featured/lesson7.png',
//   },
//   {
//     title: 'Fraud and Scams',
//     duration: '281',
//     description:
//       'Online fraud is ever growing as the criminals become more devious with their scams. You could fall victim to financial fraud if you are not ready to face the tell-tale signs of scams already out there. Jade and Joe find out that reliable information is key to staying empowered and knowing how to keep their finances safe.',
//     url: 'https://www.blackbullion.com/pathways/key-stage-4',
//     image: 'https://prodcontent.blackbullion.com/images/featured/lesson8.png',
//   },
//   {
//     title: 'Welcome to uni',
//     duration: '111',
//     description:
//       "University isn't for everyone - there are lots of roads to success. But don't let money be the driving force in your decision.",
//     url: 'https://www.blackbullion.com/pathways/starting-university-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Starting_University_Module.png',
//   },
//   {
//     title: 'Money coming in',
//     duration: '198',
//     description:
//       'All the terms and concepts explained in one place. If you get comfortable with the language, it will all be clearer going forward.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-02.jpg',
//   },
//   {
//     title: 'UK full time students',
//     duration: '450',
//     description:
//       'Find out what loans, grants and other financial support is available to you.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-03.jpg',
//   },
//   {
//     title: 'Money going out',
//     duration: '443',
//     description:
//       'Get a rough idea of what life on campus will cost you. Remember everyone is different and spends differently, this is just an average.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-06.jpg',
//   },
//   {
//     title: 'Budgeting and bank accounts',
//     duration: '233',
//     description:
//       'Figure out about student bank accounts and learn some budgeting hacks.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-07.jpg',
//   },
//   {
//     title: 'Days 1 & 2',
//     duration: '220',
//     description:
//       "There are many great reasons to save money. Knowing how much money you have coming in and going out is essential if you're going to manage your cash efficiently and most banks\u2019 apps do that pretty much automatically for you.",
//     url: 'https://www.blackbullion.com/pathways/21-day-money-bootcamp',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers2-01.jpg',
//   },
//   {
//     title: 'Days 3 to 5',
//     duration: '189',
//     description:
//       "There is always a way to increase your income, or reduce your spending. From getting a part-time job to reducing your bills, we're going to give you some ideas on making your money go further.",
//     url: 'https://www.blackbullion.com/pathways/21-day-money-bootcamp',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers2-02.jpg',
//   },
//   {
//     title: 'Days 6 to 8',
//     duration: '127',
//     description:
//       'The only way to feel in control of debt is to be on top of it. And that includes coming up with a good plan to manage it.',
//     url: 'https://www.blackbullion.com/pathways/21-day-money-bootcamp',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers2-03.jpg',
//   },
//   {
//     title: 'Days 9 to 11',
//     duration: '157',
//     description:
//       "The gap between the food we cook and the food we talk about has never been bigger. Let's look into some simple ways of saving money on food, whilst keeping the foodie in you satisfied.",
//     url: 'https://www.blackbullion.com/pathways/21-day-money-bootcamp',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers2-04.jpg',
//   },
//   {
//     title: 'Days 12 to 14',
//     duration: '129',
//     description:
//       "Still not sure if you can cut down on your spending? Look no further as here we're giving you 3 simple ideas you can implement in an instant. You're welcome.",
//     url: 'https://www.blackbullion.com/pathways/21-day-money-bootcamp',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers2-05.jpg',
//   },
//   {
//     title: 'Days 15 to 17',
//     duration: '196',
//     description:
//       "It's important to track and understand how using cash, or card, effects our spending habits. Small adjustments can really make a difference to your monthly budget.",
//     url: 'https://www.blackbullion.com/pathways/21-day-money-bootcamp',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers2-06.jpg',
//   },
//   {
//     title: 'Days 18 to 19',
//     duration: '116',
//     description:
//       'Today is a perfect day to think about the long term money management. From sharing costs to work placements, find something that suits your lifestyle.',
//     url: 'https://www.blackbullion.com/pathways/21-day-money-bootcamp',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers2-07.jpg',
//   },
//   {
//     title: 'Days 20 to 21',
//     duration: '99',
//     description:
//       'Gambling has become one of the biggest problems for students but there are simple ways to avoid any serious loss or addiction.',
//     url: 'https://www.blackbullion.com/pathways/21-day-money-bootcamp',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers2-08.jpg',
//   },
//   {
//     title: 'What you will learn in this module',
//     duration: '55',
//     description:
//       "No one expects living on a student budget to be easy, far too many students are living in a state of anxiety. So let's create a manageable plan that will set you up for success.",
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/whatyouwilllearn_thumbnail.png',
//   },
//   {
//     title: 'What is a budget?',
//     duration: '154',
//     description:
//       'Learning how to budget will make you feel financially safer, more in control and, undoubtedly, save you money.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-02.png',
//   },
//   {
//     title: 'Why is it so important?',
//     duration: '54',
//     description:
//       "Money management is a skill and understanding how your money circulates is part of it. So let's see how much you are paying for your life, shall we?",
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-03.png',
//   },
//   {
//     title: 'How to do it?',
//     duration: '104',
//     description:
//       "Now you know what the budget is and what is it's purpose. We are now going to roll-up our sleeves and start planning!",
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-04.png',
//   },
//   {
//     title: 'Money in',
//     duration: '260',
//     description:
//       'The more income you have the easier it is to have a healthy budget so have a think about where you might be able to get more money.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-05.png',
//   },
//   {
//     title: 'Expenses',
//     duration: '81',
//     description:
//       "Looking at expenses is rarely fun, but you want to get the most out of your money, don't you? You may be surprised by how careless costs add up.",
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-06.png',
//   },
//   {
//     title: 'Creating a budget',
//     duration: '229',
//     description:
//       'With both, income and expenses written down you can now clearly see where you are. It\u2019s time to plug it all into this budgeting tool.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-07.png',
//   },
//   {
//     title: 'Automating',
//     duration: '131',
//     description:
//       "Making a budget is easy. Sticking to it, well, that's another story. Here are some suggestions on how to stick to your money plan.",
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-08.png',
//   },
//   {
//     title: 'Working with cash',
//     duration: '281',
//     description:
//       "People often say 'cash is king'. Here's one of our best money hacks. It's simple but very effective. We hope you'll give it a go!",
//     url: 'https://www.blackbullion.com/pathways/budgeting-old',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers-10.png',
//   },
//   {
//     title: 'What you will learn in this module',
//     duration: '51',
//     description:
//       "No one expects living on a student budget to be easy, far too many students are living in a state of anxiety. So let's create a manageable plan that will set you up for success.",
//     url: 'https://www.blackbullion.com/pathways/debt',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers4-02.png',
//   },
//   {
//     title: 'What is debt?',
//     duration: '343',
//     description:
//       "Debt is the obligation to pay money under an agreement, and so is credit. These agreements often involve interest. Let's look into what it all means.",
//     url: 'https://www.blackbullion.com/pathways/debt',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers4-03.png',
//   },
//   {
//     title: 'What is compound interest?',
//     duration: '319',
//     description:
//       'Compound interest is the reason debt can easily get completely out of control. Let us show you how it all works.',
//     url: 'https://www.blackbullion.com/pathways/debt',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers4-04.png',
//   },
//   {
//     title: 'Credit worthiness',
//     duration: '141',
//     description:
//       'We can\u2019t speak about debt without talking a bit about credit worthiness. Basically credit worthiness establishes whether a lender will lend you the money you want to borrow.',
//     url: 'https://www.blackbullion.com/pathways/debt',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers4-05.png',
//   },
//   {
//     title: 'Is debt good or bad?',
//     duration: '250',
//     description:
//       'Debt is neither absolutely good nor absolutely bad. It\u2019s a tool...much like a car. A car can cause accidents and hurt people and it can also help you to efficiently get around. It all depends on how you use it.',
//     url: 'https://www.blackbullion.com/pathways/debt',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers4-06.png',
//   },
//   {
//     title: 'When debt is a problem',
//     duration: '164',
//     description:
//       'Many people get oblivious to the amount of debt they accrue. Debt can cause all sorts of difficulties, but debt, even serious debt, can be managed and in most cases resolved\u2026if you know how.',
//     url: 'https://www.blackbullion.com/pathways/debt',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers4-07.png',
//   },
//   {
//     title: 'The basics',
//     duration: '316',
//     description:
//       'Understand how saving is related to debt and how to best motivate yourself to start saving money.',
//     url: 'https://www.blackbullion.com/pathways/savings',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers_Saving1.png',
//   },
//   {
//     title: 'Why save?',
//     duration: '295',
//     description:
//       'Find out about interest rates, compound interest, inflation - and how to make the financial system work for you.',
//     url: 'https://www.blackbullion.com/pathways/savings',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers_Saving.png',
//   },
//   {
//     title: 'Choosing a savings account',
//     duration: '236',
//     description:
//       "How do you choose a savings account? We'll give you pointers on what to look out for and tell you about the super-hero of savings accounts.",
//     url: 'https://www.blackbullion.com/pathways/savings',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers_Saving2.png',
//   },
//   {
//     title: 'Grow a saving mindset',
//     duration: '257',
//     description:
//       'Make small changes today & use technology to your advantage so your future self will have something to live on!',
//     url: 'https://www.blackbullion.com/pathways/savings',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/headers_Saving3.png',
//   },
//   {
//     title: 'Financial savvy ',
//     duration: '57',
//     description:
//       'If you could go back in time and give yourself one piece of financial advice when you were just starting out, what would it be?',
//     url: 'https://www.blackbullion.com/pathways/startup-survivors',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screen Shot 2016-12-06 at 16.46.30.png',
//   },
//   {
//     title: 'Bad day motivation',
//     duration: '74',
//     description:
//       'How do you motivate yourself to keep going if you are having a bad day and are not being productive?',
//     url: 'https://www.blackbullion.com/pathways/startup-survivors',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screen Shot 2016-12-06 at 16.54.36.png',
//   },
//   {
//     title: 'Entrepreneurial scrappiness',
//     duration: '135',
//     description:
//       'What are some of the creative ways that you\u2019ve kept spending to a minimum as an entrepreneur?',
//     url: 'https://www.blackbullion.com/pathways/startup-survivors',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screen Shot 2016-12-06 at 17.12.19.png',
//   },
//   {
//     title: 'Business-card bingo',
//     duration: '41',
//     description: 'I have managed to score some business cards, now what?',
//     url: 'https://www.blackbullion.com/pathways/the-networking-game',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screen Shot 2017-01-11 at 11.25.15.png',
//   },
//   {
//     title: "Nail your first 'Hello' ",
//     duration: '162',
//     description:
//       'How do I start a conversation with someone I am interested in networking with?',
//     url: 'https://www.blackbullion.com/pathways/the-networking-game',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Conversation starters_cover image.png',
//   },
//   {
//     title: 'Brand yourself',
//     duration: '141',
//     description:
//       'How do I stand out from the crowd if everyone in the room has more experience than me?',
//     url: 'https://www.blackbullion.com/pathways/the-networking-game',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/personal_brand.jpg',
//   },
//   {
//     title: 'New to the UK',
//     duration: '100',
//     description:
//       'Welcome to the UK! You\u2019re going to have the experience of a lifetime.',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_1_1_Artboard 1.jpg',
//   },
//   {
//     title: 'Language of money',
//     duration: '260',
//     description:
//       'An overview of some of the most common and important terms you will hear which are related to money and finance.',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_2_7_Artboard 1.jpg',
//   },
//   {
//     title: 'Applying to University from abroad',
//     duration: '159',
//     description:
//       'If you are still thinking about applying to a UK university, this short guide will be invaluable!',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_3_11-01.jpg',
//   },
//   {
//     title: 'International Visas',
//     duration: '185',
//     description:
//       'Make sure you find out if you need a visa to study in the UK.',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_4_2_Artboard 1.jpg',
//   },
//   {
//     title: 'Intro to Budgeting',
//     duration: '126',
//     description:
//       'Studying in the UK isn\u2019t cheap (as we\u2019re sure you\u2019ve heard!).',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_5_3-01.jpg',
//   },
//   {
//     title: 'Budgeting: Money In',
//     duration: '216',
//     description:
//       'The more income you have the easier it is to have a healthy budget so have a think about where you might be able to get more money.',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_6_1_Artboard 1.jpg',
//   },
//   {
//     title: 'Budgeting: Money Out',
//     duration: '158',
//     description:
//       'Course fees aren\u2019t the only expense you have to consider. What about accommodation, food, travel, and so on?',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_7_1_Artboard 1.jpg',
//   },
//   {
//     title: 'Opening a Student Bank Account',
//     duration: '114',
//     description:
//       'All this talk about budgeting is fine, but managing your finances properly would be very difficult without the essential bank account!',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_8_3_Artboard 1.jpg',
//   },
//   {
//     title: 'Life in the UK',
//     duration: '205',
//     description:
//       'Queuing, talking about the weather, drinking tea, pubs, politeness, complaining...which stereotypes are true and which are a load of porkies?!*\r\n\r\n\r\n*Porkies = Cockney rhyming slang: "pork pies" = lies.',
//     url: 'https://www.blackbullion.com/pathways/international-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/INT_9_11_Artboard 1.jpg',
//   },
//   {
//     title: 'What is Financial Risk?',
//     duration: '181',
//     description:
//       "There are many risks you can take that affect your finances. Although financial risk is not necessarily a bad thing (you could come out on top), it's important to be aware of the pitfalls to taking such risks.",
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R1_3 copy.png',
//   },
//   {
//     title: 'Instant Gratification',
//     duration: '280',
//     description:
//       'Have you ever bought something on impulse and regretted it later? In this unit we explore the concept of instant gratification, and how it can have dire consequences of your finances if not managed well.',
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/R3_13 copy.png',
//   },
//   {
//     title: 'Credit Cards',
//     duration: '387',
//     description:
//       'Is getting a credit card a good idea? Know the pros and cons of owning a credit card, how to use it sensibly, and learn the lingo involved.',
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R_4_10.png',
//   },
//   {
//     title: 'Payday Loans',
//     duration: '336',
//     description:
//       'Sometimes people get desperate for money, and turn to payday loans. Its important to know how dangerous these loans are, how they can lead to a cycle of debt, and what alternatives there are.',
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R_5_8.png',
//   },
//   {
//     title: 'Matched Betting',
//     duration: '142',
//     description:
//       "Matched betting is becoming more and more popular among university students and has been touted as 'risk-free' \u2013 but is it really?",
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R_6_1.png',
//   },
//   {
//     title: 'Gambling',
//     duration: '185',
//     description:
//       'We spoke to a student counsellor who gave us first-hand, expert information on student gambling in this video interview.',
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screen Shot 2017-05-12 at 11.09.32.png',
//   },
//   {
//     title: 'Secured & Unsecured Loans',
//     duration: '193',
//     description:
//       "It's important to know which type of loan you're taking out, should you need to. There's a big difference between secured and unsecured loans, but by the end of this unit, you will know :)",
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R_10_4.png',
//   },
//   {
//     title: 'Cyber Security',
//     duration: '359',
//     description:
//       'Can you tell the difference between a real and fake website? Do you understand the potential consequences of posting certain things online?\r\n\r\nTony Neate, the CEO of Get Safe Online (www.getsafeonline.org), lends us his expert knowledge in this video interview.',
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screen Shot 2017-05-12 at 11.13.18.png',
//   },
//   {
//     title: 'Emergency Fund Saving',
//     duration: '209',
//     description:
//       'If you broke your phone, laptop or tablet, would you have enough money backed up to fix it? Here we discuss achievable ways to save money for emergencies (or a rainy day).',
//     url: 'https://www.blackbullion.com/pathways/risk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/R11_2 copy.png',
//   },
//   {
//     title: 'Why pay taxes?',
//     duration: '416',
//     description:
//       'Learn about how taxes are used in a social democracy and briefly introduce different points of view.',
//     url: 'https://www.blackbullion.com/pathways/tax',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/BLACKBULLION_T1_1B.jpg',
//   },
//   {
//     title: 'How does income tax work?',
//     duration: '273',
//     description: 'Learn about income tax, as well as National Insurance.',
//     url: 'https://www.blackbullion.com/pathways/tax',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T2-1.jpeg',
//   },
//   {
//     title: 'The PAYE System',
//     duration: '264',
//     description: 'Learn the ins and outs of the PAYE system.',
//     url: 'https://www.blackbullion.com/pathways/tax',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T3-1.jpeg',
//   },
//   {
//     title: 'How can I cut my tax bill?',
//     duration: '370',
//     description:
//       'Understanding tax deductions as an employee and self-employed freelancer.',
//     url: 'https://www.blackbullion.com/pathways/tax',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T5-1.jpeg',
//   },
//   {
//     title: 'What is stamp duty?',
//     duration: '294',
//     description:
//       'Learn about the stamp duty land tax the tiered system and when and how it is paid.',
//     url: 'https://www.blackbullion.com/pathways/tax',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T6-1.jpeg',
//   },
//   {
//     title: 'What is a tax code?',
//     duration: '491',
//     description:
//       'Learn about what a tax code is, how to read it, what it means for you and what to do if there is a mistake.',
//     url: 'https://www.blackbullion.com/pathways/tax',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T7-1.jpeg',
//   },
//   {
//     title: 'Welcome to University',
//     duration: '236',
//     description:
//       'How much is university going to cost? Find out about fees and funding.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-au',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU1_1_AUS_thumbnail.png',
//   },
//   {
//     title: 'How to pay for university',
//     duration: '371',
//     description:
//       'Where is the money coming from? Who pays for what and how much you\u2019ll owe.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-au',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU2_thumbnail_AUS.png',
//   },
//   {
//     title: 'The cost of living as a student',
//     duration: '328',
//     description:
//       'What are some ways of saving money? Cut your spending with some simple changes.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-au',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU3_thumbnail_AUS.png',
//   },
//   {
//     title: 'Emergency Cash',
//     duration: '250',
//     description:
//       'What can I do if I need money now? Lots of options for momentary monetary crisis.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-au',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU4_thumbnail_AUS.png',
//   },
//   {
//     title: 'Staying Healthy at University',
//     duration: '759',
//     description: "Blackbullion's guide to staying healthy at university",
//     url: 'https://www.blackbullion.com/pathways/staying-healthy-at-university',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SH_thumbnail.png',
//   },
//   {
//     title: 'Welcome to University',
//     duration: '115',
//     description:
//       "University isn't for everyone - there are lots of roads to success. But don't let money be the driving force in your decision.",
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scottish-home-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU1_1_SCO_H_THUMB.png',
//   },
//   {
//     title: 'Welcome to uni',
//     duration: '115',
//     description:
//       "University isn't for everyone - there are lots of roads to success. But don't let money be the driving force in your decision.",
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-eu',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU1_1_SCO_EU_THUMB.png',
//   },
//   {
//     title: 'Understanding University Finance',
//     duration: '182',
//     description:
//       'Loans? Inflation? Means-tested? Learn the terminology surrounding university finance.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scottish-home-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU2_4_SCO_H_THUMB.png',
//   },
//   {
//     title: 'Understanding University Finance',
//     duration: '182',
//     description:
//       'Loans? Inflation? Means-tested? Learn the terminology surrounding university finance.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-eu',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU2_4_SCO_EU_THUMB.png',
//   },
//   {
//     title: 'How to pay for university',
//     duration: '353',
//     description:
//       'Where is the money coming from? Who pays for what and how much you\u2019ll owe.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scottish-home-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU3A_2_SCO_H_THUMB.png',
//   },
//   {
//     title: 'How to pay for university',
//     duration: '330',
//     description:
//       'Where is the money coming from? Who pays for what and how much you\u2019ll owe.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-eu',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU3c_1_SCO_EU.png',
//   },
//   {
//     title: 'The cost of living as a student',
//     duration: '344',
//     description:
//       'What are some ways of saving money? Cut your spending with some simple changes.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scottish-home-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU4_4_SCO_H_THUMB.png',
//   },
//   {
//     title: 'The cost of living as a student',
//     duration: '344',
//     description:
//       'What are some ways of saving money? Cut your spending with some simple changes.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-eu',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU4_4_SCO_EU_THUMB.png',
//   },
//   {
//     title: 'Student Bank Accounts',
//     duration: '222',
//     description:
//       'Figure out the best bank account deals and some of the tips and tricks that will ensure you choose the right one.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scottish-home-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU5_14_SCO_H.png',
//   },
//   {
//     title: 'Student Bank Accounts',
//     duration: '222',
//     description:
//       'Figure out the best bank account deals and some of the tips and tricks that will ensure you choose the right one.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-eu',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU5_14_SCO_EU.png',
//   },
//   {
//     title: 'Welcome to uni',
//     duration: '115',
//     description:
//       "University isn't for everyone - there are lots of roads to success. But don't let money be the driving force in your decision.",
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU1_1_SCO_RUK_THUMB.png',
//   },
//   {
//     title: 'Understanding University Finance',
//     duration: '182',
//     description:
//       'Loans? Inflation? Means-tested? Learn the terminology surrounding university finance.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU2_4_SCO_RUK_THUMB.png',
//   },
//   {
//     title: 'How to pay for university',
//     duration: '400',
//     description:
//       'Where is the money coming from? Who pays for what and how much you\u2019ll owe.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU3b_1_SCO_RUK.png',
//   },
//   {
//     title: 'Starting University: Test your knowledge',
//     duration: '90',
//     description:
//       'Find out if you know your student loans from your budgeting moans with our end of learning pathway quiz.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scottish-home-students',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU_SCO_THUMBNAIL_H.png',
//   },
//   {
//     title: 'The cost of living as a student',
//     duration: '344',
//     description:
//       'What are some ways of saving money? Cut your spending with some simple changes.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU4_4_SCO_RUK_THUMB.png',
//   },
//   {
//     title: 'Student Bank Accounts',
//     duration: '222',
//     description:
//       'Figure out the best bank account deals and some of the tips and tricks that will ensure you choose the right one.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU5_14_SCO_RUK.png',
//   },
//   {
//     title: 'Starting University: Test your knowledge',
//     duration: '90',
//     description:
//       'Find out if you know your student loans from your budgeting moans with our end of learning pathway quiz.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-eu',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU_SCO_EU_THUMB.png',
//   },
//   {
//     title: 'Starting University: Test your knowledge',
//     duration: '90',
//     description:
//       'Find out if you know your student loans from your budgeting moans with our end of learning pathway quiz.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-scotland-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU_SCO_THUMBNAIL_RUK.png',
//   },
//   {
//     title: 'Starting University: Test your knowledge',
//     duration: '90',
//     description:
//       'Test your knowledge of starting university with this quick end of learning quiz.',
//     url: 'https://www.blackbullion.com/pathways/starting-university-au',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SUMMATIVE_THUMB.png',
//   },
//   {
//     title: 'Budgeting: Test your knowledge',
//     duration: '100',
//     description:
//       'Test your knowledge of budgeting with this quick end of learning quiz.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-aus',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Budgeting_AUS_THUMB.png',
//   },
//   {
//     title: 'What is budgeting?',
//     duration: '257',
//     description:
//       'Learning how to budget will make you feel financially safer, more in control and, undoubtedly, save you money.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B1_THUMB.png',
//   },
//   {
//     title: 'Budgeting Terminology',
//     duration: '283',
//     description:
//       'Income? Expenses? Find out all the language you require to become a budgeting pro.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B2_THUMB.png',
//   },
//   {
//     title: 'Creating your budget',
//     duration: '77',
//     description:
//       'Use our budgeting calculator to create your own budget, get to grips with the shape of your finances and prepare to make positive changes.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B3_THUMB.png',
//   },
//   {
//     title: 'Using your budget to save money',
//     duration: '238',
//     description:
//       "Now you've got an idea of your budget, learn some tips and tricks that will let you use that information to save cash.",
//     url: 'https://www.blackbullion.com/pathways/budgeting-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B4_THUMB.png',
//   },
//   {
//     title: 'Why pay taxes?',
//     duration: '416',
//     description:
//       "You'll learn about the history of taxes, the different types of taxes that are used across the world and where that money goes.",
//     url: 'https://www.blackbullion.com/pathways/tax-aus',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Tax_AUS_Lesson1_Thumbnail.jpg',
//   },
//   {
//     title: 'How does income tax work?',
//     duration: '563',
//     description:
//       "You'll learn about income tax and how to pay it. Along with discovering how to use tax deductions to your advantage.",
//     url: 'https://www.blackbullion.com/pathways/tax-aus',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/T2_AUS_THUMB.jpg',
//   },
//   {
//     title: 'Tax: Test your knowledge',
//     duration: '100',
//     description:
//       'Test your knowledge of tax with this quick end of learning quiz.',
//     url: 'https://www.blackbullion.com/pathways/tax-aus',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/BLACKBULLION_T1_1C.jpg',
//   },
//   {
//     title: 'What is  a Tax File Number?',
//     duration: '206',
//     description:
//       "You'll learn all that you need to know about Tax File Numbers, how to get one and why you need one.",
//     url: 'https://www.blackbullion.com/pathways/tax-aus',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/T7_1_THUMB.png',
//   },
//   {
//     title: 'What is the Goods and Services Tax?',
//     duration: '278',
//     description:
//       "You'll learn about Goods and Services Tax, when you pay it and how it impacts you.",
//     url: 'https://www.blackbullion.com/pathways/tax-aus',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/T9_2_THUMB.png',
//   },
//   {
//     title: 'Welcome to University',
//     duration: '111',
//     description:
//       "University isn't for everyone - there are lots of roads to success. But don't let money be the driving force in your decision.",
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-part-time-students-england',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU_1_3.png',
//   },
//   {
//     title: 'Money coming in',
//     duration: '198',
//     description:
//       'All the terms and concepts explained in one place. If you get comfortable with the language, it will all be clearer going forward.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-part-time-students-england',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU_2_2_thumbnail.png',
//   },
//   {
//     title: 'UK Part-Time Students',
//     duration: '378',
//     description:
//       'Understand what loans, grants and other financial support is available to you.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-part-time-students-england',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU3B_1.jpg',
//   },
//   {
//     title: 'Money going out',
//     duration: '443',
//     description:
//       'Get a rough idea of what life on campus will cost you. Remember everyone is different and spends differently, this is just an average.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-part-time-students-england',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU_4_2.png',
//   },
//   {
//     title: 'Budgeting and bank accounts',
//     duration: '233',
//     description:
//       'Figure out about student bank accounts and learn some budgeting hacks.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-part-time-students-england',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU5_13_Artboard_1.jpg',
//   },
//   {
//     title: 'Welcome to University',
//     duration: '111',
//     description:
//       "University isn't for everyone - there are lots of roads to success. But don't let money be the driving force in your decision.",
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-eu-students-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU_1_2.png',
//   },
//   {
//     title: 'Money coming in',
//     duration: '198',
//     description:
//       'All the terms and concepts explained in one place. If you get comfortable with the language, it will all be clearer going forward.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-eu-students-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU2_1.png',
//   },
//   {
//     title: 'EU Students',
//     duration: '407',
//     description: 'Find out what financial support is available to you.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-eu-students-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU3c_3_SCO_EU_THUMB.png',
//   },
//   {
//     title: 'Money going out',
//     duration: '443',
//     description:
//       'Get a rough idea of what life on campus will cost you. Remember everyone is different and spends differently, this is just an average.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-eu-students-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU_4_4_thumbnail.png',
//   },
//   {
//     title: 'Budgeting and bank accounts',
//     duration: '233',
//     description:
//       'Figure out about student bank accounts and learn some budgeting hacks.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-eu-students-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/SU5_13_Artboard_1.jpg',
//   },
//   {
//     title: 'Coming Soon...',
//     duration: '0',
//     description:
//       'In the meantime, check out our digital Appcommodation resource, exploring all the Apps should keep you busy until we go live.',
//     url: 'https://www.blackbullion.com/pathways/fintech-insights',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Option2_Image.jpg',
//   },
//   {
//     title: 'Saving as a Student',
//     duration: '447',
//     description:
//       'Understand how saving is related to debt and how to best motivate yourself to start saving money.',
//     url: 'https://www.blackbullion.com/pathways/savings-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/S1_1_AUS.png',
//   },
//   {
//     title: 'Savings Strategies',
//     duration: '374',
//     description:
//       'Find out about interest rates, compound interest, inflation - and how to make the financial system work for you.',
//     url: 'https://www.blackbullion.com/pathways/savings-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/S2_1_AUS.png',
//   },
//   {
//     title: 'Student and Savings Accounts',
//     duration: '400',
//     description:
//       "How do you choose a savings account? We'll give you pointers on what to look out for and tell you about the super-hero of savings accounts.",
//     url: 'https://www.blackbullion.com/pathways/savings-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/S3_1_AUS.png',
//   },
//   {
//     title: 'Saving Mindset',
//     duration: '240',
//     description:
//       'Make small changes today & use technology to your advantage so your future self will have something to live on!',
//     url: 'https://www.blackbullion.com/pathways/savings-aus',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/lesson4slide14-01.png',
//   },
//   {
//     title: 'Understanding Investments',
//     duration: '547',
//     description: 'A brief introduction to the basics of simple investing.',
//     url: 'https://www.blackbullion.com/pathways/investing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Warren.png',
//   },
//   {
//     title: 'Understanding investment risk',
//     duration: '698',
//     description:
//       'Examine how and why investors are risk-averse and look at the risk factors involved in making a decision to invest.',
//     url: 'https://www.blackbullion.com/pathways/investing',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/investmentrisk.png',
//   },
//   {
//     title: 'Stocks and bonds',
//     duration: '859',
//     description:
//       'An overview of stocks and bonds, with a focus on the finance fundamentals behind these instruments.',
//     url: 'https://www.blackbullion.com/pathways/investing',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Stocksbonds.png',
//   },
//   {
//     title: 'Understanding stock prices',
//     duration: '288',
//     description: 'A break down of the basics involved in the stock market.',
//     url: 'https://www.blackbullion.com/pathways/investing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/I4_1.png',
//   },
//   {
//     title: 'Ethical investments',
//     duration: '318',
//     description:
//       'Discover what ethical investments are, the impact they can have and how you can make ethical investment choices yourself.',
//     url: 'https://www.blackbullion.com/pathways/investing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/I5_1.png',
//   },
//   {
//     title: 'The cost of University',
//     duration: '99',
//     description:
//       'A guide to your student finances. Who pays for what and how much you\u2019ll owe.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-new-zealand',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU1_2_NZ.png',
//   },
//   {
//     title: 'How to pay for University',
//     duration: '333',
//     description:
//       'Where is the money coming from? Who pays for what and how much you\u2019ll owe.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-new-zealand',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU2_1_NZ.png',
//   },
//   {
//     title: 'The cost of living as a student',
//     duration: '315',
//     description:
//       'What are some ways of saving money? Cut your spending with some simple changes.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-new-zealand',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU3_1_NZ.png',
//   },
//   {
//     title: 'Alternative and emergency funds',
//     duration: '208',
//     description:
//       'What can I do if I need money now? Lots of options for momentary monetary crisis.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-new-zealand',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU4_1_NZ.png',
//   },
//   {
//     title: 'Student Bank Accounts',
//     duration: '110',
//     description:
//       'Find out about student bank accounts and what to look out for.',
//     url:
//       'https://www.blackbullion.com/pathways/starting-university-new-zealand',
//     image: 'https://prodcontent.blackbullion.com/images/featured/SU5_1_NZ.png',
//   },
//   {
//     title: 'Saving as a student',
//     duration: '472',
//     description:
//       'Understand how saving is related to debt and how to best motivate yourself to start saving money.',
//     url: 'https://www.blackbullion.com/pathways/savings-nz',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/lesson1slide6_Artboard_1.png',
//   },
//   {
//     title: 'Savings strategies',
//     duration: '356',
//     description:
//       'Find out about interest rates and how to reduce your spending.',
//     url: 'https://www.blackbullion.com/pathways/savings-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/S2_1NZ.png',
//   },
//   {
//     title: 'Student and savings accounts',
//     duration: '444',
//     description:
//       "How do you choose a savings account? We'll give you pointers on what to look out for.",
//     url: 'https://www.blackbullion.com/pathways/savings-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/S3_1.2_NZ.png',
//   },
//   {
//     title: 'Saving mindset',
//     duration: '260',
//     description:
//       'Make small changes today & use technology to your advantage so your future self will have something to live on!',
//     url: 'https://www.blackbullion.com/pathways/savings-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/savingnz2.png',
//   },
//   {
//     title: 'What is debt?',
//     duration: '339',
//     description:
//       "Debt is the obligation to pay money under an agreement, and so is credit. These agreements often involve interest. Let's look into what it all means.",
//     url: 'https://www.blackbullion.com/pathways/debt-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D1_1.png',
//   },
//   {
//     title: 'What is compound interest?',
//     duration: '265',
//     description:
//       'Compound interest is the reason debt can easily get completely out of control. Let us show you how it all works.',
//     url: 'https://www.blackbullion.com/pathways/debt-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D2_1.png',
//   },
//   {
//     title: 'Credit worthiness',
//     duration: '156',
//     description:
//       'We can\u2019t speak about debt without talking a bit about credit worthiness. Basically, credit worthiness establishes whether a lender will lend you the money you want to borrow.',
//     url: 'https://www.blackbullion.com/pathways/debt-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D3_1.png',
//   },
//   {
//     title: 'Is debt good or bad?',
//     duration: '215',
//     description:
//       'Debt is neither absolutely good nor absolutely bad. It\u2019s a tool...much like a car. A car can cause accidents and hurt people and it can also help you to efficiently get around. It all depends on how you use it.',
//     url: 'https://www.blackbullion.com/pathways/debt-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D4_1.png',
//   },
//   {
//     title: 'HECS-HELP debt',
//     duration: '89',
//     description: 'Find out about the HECS-HELP loan scheme.',
//     url: 'https://www.blackbullion.com/pathways/debt-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D5_1.png',
//   },
//   {
//     title: 'Fees and Funding',
//     duration: '194',
//     description:
//       'Find out how tuition fee loans work, how much you will repay, and interest on your loan is calculated.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/tuitionfees.png',
//   },
//   {
//     title: 'Living Costs',
//     duration: '150',
//     description:
//       'Discover how much maintenance loan you are eligible to receive, how the repayment system works, and how interest is calculated.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/livingcosts.png',
//   },
//   {
//     title: 'Applying for Student Finance',
//     duration: '127',
//     description: 'Find out when, how, and where to apply for student finance.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screenshot_2018-07-16_15.46.57.png',
//   },
//   {
//     title: 'Student Loan Repayments',
//     duration: '178',
//     description:
//       'Understand how student loan repayments are calculated, how much you are likely to repay, and how interest is calculated on your student loans.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screenshot_2018-07-16_15.47.54.png',
//   },
//   {
//     title: 'Alternative Sources of Funding',
//     duration: '189',
//     description:
//       'An overview of the alternative sources of funding your higher education, such as scholarships, and grants.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Alternativefunding.png',
//   },
//   {
//     title: 'University Funding Introduction',
//     duration: '176',
//     description:
//       'Understand the funding structure, course fees and financial support that is available to you at university.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR1_1_ENG.png',
//   },
//   {
//     title: 'Money Management',
//     duration: '202',
//     description:
//       'Take control of your finances at university by developing a budget.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR2_1_ENG.png',
//   },
//   {
//     title: 'Student Lifestyle and Costs',
//     duration: '247',
//     description:
//       'Find out how to cut costs on necessary spending such as fashion and food. Discover some of the hidden costs that are commonly underestimated by first year students.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR3_1_ENG.png',
//   },
//   {
//     title: 'Arranging Accommodation',
//     duration: '181',
//     description:
//       'Discover the costs and savings that come with different accommodation options. Troubleshoot problems, understanding your rights as a tenant and identify some of the hidden costs and pitfalls that you may encounter with your place of living.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR4_1_ENG.png',
//   },
//   {
//     title: 'Next Steps',
//     duration: '201',
//     description:
//       'Know how to prepare for the any unexpected costs, and develop good financial habits early on in your university career so that you can carry them on for the rest of your journey in higher education.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR5_1.png',
//   },
//   {
//     title: 'Student Loans',
//     duration: '467',
//     description:
//       'How does the student funding system currently work and how can you help? What scholarships and bursaries might be available? How are you expected to help as a parent? Learn about loans and get clued-up about hidden costs that your children may encounter.',
//     url: 'https://www.blackbullion.com/pathways/parents-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/P1_1.png',
//   },
//   {
//     title: 'Lifestyle Choices',
//     duration: '290',
//     description:
//       'Money saving strategies that you can aid your children with before they depart for university.',
//     url: 'https://www.blackbullion.com/pathways/parents-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/p2_1.png',
//   },
//   {
//     title: 'Budgeting and Bills',
//     duration: '243',
//     description:
//       'Find ways you can help your student save whilst they study through building positive money management habits.',
//     url: 'https://www.blackbullion.com/pathways/parents-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/P3_1.png',
//   },
//   {
//     title: 'Accommodation and Essentials',
//     duration: '289',
//     description:
//       'Everything that you need to know about your children\u2019s accommodation. What precautions can you take to make sure you and your student are protected from lax landlords.',
//     url: 'https://www.blackbullion.com/pathways/parents-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/P4_1T.png',
//   },
//   {
//     title: 'Why University?',
//     duration: '338',
//     description:
//       'Why should you go to university? Examining 6 key arguments in favour of attending university: employability, degree premium, access to learning, value, networks and personal development.',
//     url: 'https://www.blackbullion.com/pathways/why-uni-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/whyuni2.png',
//   },
//   {
//     title: 'Why University?',
//     duration: '338',
//     description:
//       'Why go to university? Examining 6 key arguments: employability, degree premium, access to learning, value, access to learning and personal development.',
//     url: 'https://www.blackbullion.com/pathways/why-uni-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/whyuni.png',
//   },
//   {
//     title: 'What is budgeting?',
//     duration: '207',
//     description:
//       'Learning how to budget will make you feel financially safer, more in control and, undoubtedly, save you money.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B1_1_NZ.png',
//   },
//   {
//     title: 'Budgeting Terminology',
//     duration: '239',
//     description:
//       'Income? Expenses? Find out all the language you require to become a budgeting pro.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B2_1_NZ.png',
//   },
//   {
//     title: 'Creating your budget',
//     duration: '108',
//     description:
//       'Use our budgeting calculator to create your own budget, get to grips with the shape of your finances and prepare to make positive changes.',
//     url: 'https://www.blackbullion.com/pathways/budgeting-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B3_1_AUS.png',
//   },
//   {
//     title: 'Using your budget to save money',
//     duration: '250',
//     description:
//       "Now you've got an idea of your budget, learn some tips and tricks that will let you use that information to save cash.",
//     url: 'https://www.blackbullion.com/pathways/budgeting-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B4_1_NZ.png',
//   },
//   {
//     title: 'Money Management',
//     duration: '182',
//     description:
//       'Simplify the process of saving money by tracking your income and expenditure. Learn the hacks that\u2019ll keep you on the path to budget mastery.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR2_1_ENG.png',
//   },
//   {
//     title: 'Student Lifestyle and Costs',
//     duration: '247',
//     description:
//       'Find out how to cut costs on necessary spending such as fashion and food. Discover some of the hidden costs that are commonly underestimated by new students.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR3_1_ENG.png',
//   },
//   {
//     title: 'Arranging Accommodation',
//     duration: '181',
//     description:
//       'Discover the costs and savings that come with different accommodation options. Troubleshoot problems, understanding your rights as a tenant and identify some of the hidden costs and pitfalls that you may encounter with your place of living.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR4_1_ENG.png',
//   },
//   {
//     title: 'Next Steps',
//     duration: '201',
//     description:
//       'Know how to prepare for the any unexpected costs, and develop good financial habits early on in your university career so that you can carry them through the rest of your journey.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR5_1.png',
//   },
//   {
//     title: 'Lifestyle Choices',
//     duration: '290',
//     description:
//       'Money saving strategies that you can aid your children with before they depart. Identify practical skills parents might be able to teach directly or encourage your children to learn.',
//     url: 'https://www.blackbullion.com/pathways/parents-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/p2_1.png',
//   },
//   {
//     title: 'Budgeting and Bills',
//     duration: '251',
//     description:
//       'Budgeting advice and spending assistance. Find ways you can help your student save whilst they study through building positive money management habits before they depart.',
//     url: 'https://www.blackbullion.com/pathways/parents-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/P3_1.png',
//   },
//   {
//     title: 'Accommodation and Essentials',
//     duration: '289',
//     description:
//       'Everything that you need to know about your children\u2019s accommodation. What precautions can you take to make sure you and your student are protected from lax landlords. Guarantor contracts. What does your child need with them to university, and what can they live without? Find out how to reduce costs on the essentials.',
//     url: 'https://www.blackbullion.com/pathways/parents-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/P4_1T.png',
//   },
//   {
//     title: 'Tuition fees',
//     duration: '211',
//     description:
//       'Understand the funding structure, course fees and financial support that is available to you.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n*Fee structures differ for English students studying in Scotland, see Starting University -Rest of UK.',
//     url: 'https://www.blackbullion.com/pathways/prepare-for-uni-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR1_2_SCO.png',
//   },
//   {
//     title: 'Student Funding',
//     duration: '208',
//     description:
//       'How does the student funding system currently work and how can you help? What scholarships and bursaries might be available? How are you expected to help as a parent? Learn about loans and get clued-up about hidden costs that your children may encounter.',
//     url: 'https://www.blackbullion.com/pathways/parents-sco',
//     image: 'https://prodcontent.blackbullion.com/images/featured/P1_13.png',
//   },
//   {
//     title: 'Fees and Funding',
//     duration: '194',
//     description:
//       'Find out how tuition fee loans work, how much you will repay, and interest on your loan is calculated.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-rest-of-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FandF1.png',
//   },
//   {
//     title: 'Living Costs',
//     duration: '150',
//     description:
//       'Discover how much maintenance loan you are eligible to receive, how the repayment system works, and how interest is calculated.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/livingcosts.png',
//   },
//   {
//     title: 'Applying for Student Finance',
//     duration: '127',
//     description: 'Find out when, how, and where to apply for student finance.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/applyingfunding.png',
//   },
//   {
//     title: 'Student Loan Repayments',
//     duration: '178',
//     description:
//       'Understand how student loan repayments are calculated, how much you are likely to repay, and how interest is calculated on your student loans.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-rest-of-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/interest.png',
//   },
//   {
//     title: 'Alternative Sources of Funding',
//     duration: '189',
//     description:
//       'An overview of the alternative sources of funding your higher education, such as scholarships, and grants.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-rest-of-uk',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Alternativefunding.png',
//   },
//   {
//     title: 'How does income tax work in New Zealand',
//     duration: '144',
//     description:
//       "You'll learn about income tax, tax bands and all about the ACC Earners' Levy.",
//     url: 'https://www.blackbullion.com/pathways/tax-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T2_1NZ.png',
//   },
//   {
//     title: 'Paying tax as a part-time worker',
//     duration: '141',
//     description:
//       'Learn how the tax system works for part-time employees and contractors.',
//     url: 'https://www.blackbullion.com/pathways/tax-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T3_1NZ.png',
//   },
//   {
//     title: 'Taxes and Student Loans',
//     duration: '178',
//     description:
//       'Learn all about: student loans, repayments, deductions, exemptions, and tax codes.',
//     url: 'https://www.blackbullion.com/pathways/tax-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T4_1NZ.png',
//   },
//   {
//     title: 'How does GST work in New Zealand',
//     duration: '136',
//     description:
//       "You'll learn about Goods and Services Tax, when you pay it and how it impacts you.",
//     url: 'https://www.blackbullion.com/pathways/tax-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/T5_1NZ.png',
//   },
//   {
//     title: 'Why pay taxes?',
//     duration: '190',
//     description:
//       'Learn about how taxes are used in a social democracy and briefly introduce different points of view.',
//     url: 'https://www.blackbullion.com/pathways/tax-nz',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/BLACKBULLION_T1_1A.jpg',
//   },
//   {
//     title: 'What is Financial Risk?',
//     duration: '192',
//     description:
//       "There are many risks you can take that affect your finances. Although financial risk is not necessarily a bad thing (you could come out on top), it's important to be aware of the pitfalls to taking such risks.",
//     url: 'https://www.blackbullion.com/pathways/risk-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R1_1.1AUS.png',
//   },
//   {
//     title: 'Instant Gratification',
//     duration: '271',
//     description:
//       'Have you ever bought something on impulse and regretted it later? In this unit we explore the concept of instant gratification, and how it can have dire consequences of your finances if not managed well.',
//     url: 'https://www.blackbullion.com/pathways/risk-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R3_1copy.png',
//   },
//   {
//     title: 'Emergency Funds',
//     duration: '162',
//     description:
//       'If you broke your phone, laptop or tablet, would you have enough money backed up to fix it? Here we discuss achievable ways to save money for emergencies (or a rainy day).',
//     url: 'https://www.blackbullion.com/pathways/risk-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R11_2copy.png',
//   },
//   {
//     title: 'Payday Loans',
//     duration: '263',
//     description:
//       'Sometimes people get desperate for money, and turn to payday loans. Its important to know how dangerous these loans are, how they can lead to a cycle of debt, and what alternatives there are.',
//     url: 'https://www.blackbullion.com/pathways/risk-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R12_1NZ.png',
//   },
//   {
//     title: 'Credit Cards',
//     duration: '162',
//     description:
//       'Is getting a credit card a good idea? Know the pros and cons of owning a credit card, how to use is sensibly, and learn the lingo involved.',
//     url: 'https://www.blackbullion.com/pathways/risk-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R12_2NZ.png',
//   },
//   {
//     title: 'What is debt?',
//     duration: '259',
//     description:
//       "Debt is the obligation to pay money under an agreement, and so is credit. These agreements often involve interest. Let's look into what it all means.",
//     url: 'https://www.blackbullion.com/pathways/debt-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D1_1_NZ.png',
//   },
//   {
//     title: 'What is compound interest?',
//     duration: '276',
//     description:
//       'Compound interest is the reason debt can easily get completely out of control. Let us show you how it all works.',
//     url: 'https://www.blackbullion.com/pathways/debt-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D2_1_NZ.png',
//   },
//   {
//     title: 'Credit worthiness',
//     duration: '153',
//     description:
//       'We can\u2019t speak about debt without talking a bit about credit worthiness. Basically, credit worthiness establishes whether a lender will lend you the money you want to borrow.',
//     url: 'https://www.blackbullion.com/pathways/debt-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D3_1_NZ.png',
//   },
//   {
//     title: 'Is debt good or bad?',
//     duration: '218',
//     description:
//       'Debt is neither absolutely good nor absolutely bad. It\u2019s a tool...much like a car. A car can cause accidents and hurt people and it can also help you to efficiently get around. It all depends on how you use it.',
//     url: 'https://www.blackbullion.com/pathways/debt-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D4_1_NZ.png',
//   },
//   {
//     title: 'Student loan debt',
//     duration: '87',
//     description:
//       'All you need to know about your student loan from interest rates to repayments.',
//     url: 'https://www.blackbullion.com/pathways/debt-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D5_1_NZ.png',
//   },
//   {
//     title: 'Dealing with debt',
//     duration: '99',
//     description:
//       'If you do find yourself having to deal with debt, what is the best way to pay it off?',
//     url: 'https://www.blackbullion.com/pathways/debt-nz',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D6_1_NZ.png',
//   },
//   {
//     title: 'What is Financial Risk?',
//     duration: '192',
//     description:
//       "There are many risks you can take that affect your finances. Although the financial risk is not necessarily a bad thing (you could come out on top), it's important to be aware of the pitfalls to taking such risks.",
//     url: 'https://www.blackbullion.com/pathways/risk-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R1_1.1AUS.png',
//   },
//   {
//     title: 'Instant Gratification',
//     duration: '251',
//     description:
//       'Have you ever bought something on impulse and regretted it later? In this unit we explore the concept of instant gratification, and how it can have dire consequences of your finances if not managed well.',
//     url: 'https://www.blackbullion.com/pathways/risk-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R3_1copy.png',
//   },
//   {
//     title: 'Emergency Funds',
//     duration: '182',
//     description:
//       'If you broke your phone, laptop or tablet, would you have enough money backed up to fix it? Here we discuss achievable ways to save money for emergencies (or a rainy day).',
//     url: 'https://www.blackbullion.com/pathways/risk-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R11_2copy.png',
//   },
//   {
//     title: 'Payday and Cash Loans',
//     duration: '261',
//     description:
//       'Sometimes people get desperate for money, and turn to payday loans. Its important to know how dangerous these loans are, how they can lead to a cycle of debt, and what alternatives there are.',
//     url: 'https://www.blackbullion.com/pathways/risk-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R12_1.png',
//   },
//   {
//     title: 'Credit Cards',
//     duration: '162',
//     description:
//       'Is getting a credit card a good idea? Know the pros and cons of owning a credit card, how to use is sensibly, and learn the lingo involved.',
//     url: 'https://www.blackbullion.com/pathways/risk-aus',
//     image: 'https://prodcontent.blackbullion.com/images/featured/R13_1.png',
//   },
//   {
//     title: 'Part-time tuition fee loans',
//     duration: '229',
//     description:
//       'Learn about how tuition fees and maintenance loans work, along with how to apply for and repay your loans.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-part-time-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_PT_1_0.png',
//   },
//   {
//     title: 'Repaying part-time student finance',
//     duration: '117',
//     description: 'Understand when and how to repay your loans.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-part-time-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_PT_2_0.png',
//   },
//   {
//     title: 'How to apply for government funding',
//     duration: '66',
//     description: 'All you need to know to apply for government funding.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-part-time-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_PT_3_1.png',
//   },
//   {
//     title: 'Grants for part-time study',
//     duration: '68',
//     description:
//       'You may be eligible to receive a grant or bursary from a charity or trust. Find out more.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-part-time-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_PT_4_1.png',
//   },
//   {
//     title: 'Other sources of entitlements',
//     duration: '85',
//     description: 'Find out what other ways you can finance your studies.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-part-time-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_PT_5_1.png',
//   },
//   {
//     title: 'How much can I borrow?',
//     duration: '215',
//     description:
//       'Learn how tuition fees work, the loan application process and how repayments are made on your loan.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-masters-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_M_1_0.png',
//   },
//   {
//     title: 'Am I, and my course, eligible for funding?',
//     duration: '79',
//     description:
//       "Find out what factors influence if you qualify for a master's loan.",
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-masters-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_M_2_1.png',
//   },
//   {
//     title: 'How do you apply?',
//     duration: '47',
//     description: "Find out how to apply for a master's loan.",
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-masters-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_M_3_1.png',
//   },
//   {
//     title: 'Interest rates and repayments',
//     duration: '146',
//     description: 'Learn when and how repayments are made on your loan.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-masters-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_M_4_1.png',
//   },
//   {
//     title: "Other sources of Master's funding",
//     duration: '99',
//     description: 'Explore additional sources of funding for your studies.',
//     url: 'https://www.blackbullion.com/pathways/fees-and-funding-masters-eng',
//     image: 'https://prodcontent.blackbullion.com/images/featured/FF_M_5_1.png',
//   },
//   {
//     title: 'PhD Funding Overview',
//     duration: '135',
//     description:
//       'Understand how the tuition fees work as well as what funding is available.',
//     url: 'https://www.blackbullion.com/pathways/funding-a-phd-eng',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/FF_PhD_1_2.png',
//   },
//   {
//     title: 'Research Council Studentships',
//     duration: '147',
//     description:
//       'Find out about the UK\u2019s biggest postgraduate funder, the UKRI.',
//     url: 'https://www.blackbullion.com/pathways/funding-a-phd-eng',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/FF_PhD_2_1.png',
//   },
//   {
//     title: 'UK PhD loans',
//     duration: '162',
//     description: 'Learn how to apply for and repay your loans.',
//     url: 'https://www.blackbullion.com/pathways/funding-a-phd-eng',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/FF_PhD_3_0.png',
//   },
//   {
//     title: 'Funding from Universities',
//     duration: '79',
//     description:
//       'Find out about what PhD funding options may be available from your university.',
//     url: 'https://www.blackbullion.com/pathways/funding-a-phd-eng',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/FF_PhD_4_0.png',
//   },
//   {
//     title: 'Other sources of PhD funding',
//     duration: '91',
//     description: 'Explore additional sources of funding for your studies.',
//     url: 'https://www.blackbullion.com/pathways/funding-a-phd-eng',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Artboard54.png',
//   },
//   {
//     title: 'University Funding Introduction',
//     duration: '181',
//     description:
//       'Understand the funding structure, course fees and financial support that is available to you at university.',
//     url: 'https://www.blackbullion.com/pathways/university-funding-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR1_0.png',
//   },
//   {
//     title: 'Money Management',
//     duration: '204',
//     description:
//       'Take control of your finances at university by developing a budget.',
//     url: 'https://www.blackbullion.com/pathways/university-funding-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR2_0.png',
//   },
//   {
//     title: 'Student Lifestyle and Costs',
//     duration: '247',
//     description:
//       'Discover some of the hidden costs that are commonly underestimated by first-year students.',
//     url: 'https://www.blackbullion.com/pathways/student-lifestyle-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR3_1_ENG.png',
//   },
//   {
//     title: 'Arranging Accommodation',
//     duration: '181',
//     description:
//       'Discover the costs and savings that come with different accommodation options. Troubleshoot problems, understanding your rights as a tenant and identify some of the hidden costs and pitfalls that you may encounter with your place of living.',
//     url: 'https://www.blackbullion.com/pathways/student-lifestyle-uk',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR4_1_ENG.png',
//   },
//   {
//     title: 'Next steps',
//     duration: '201',
//     description:
//       'Get ready for your future at university. Start thinking about next years deposit, prepare for unexpected costs. Learn about student bank accounts and different funding available to you.',
//     url: 'https://www.blackbullion.com/pathways/futureproofing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/PR5_1.png',
//   },
//   {
//     title: 'Understanding investments',
//     duration: '537',
//     description: 'A brief introduction to the basics of simple investing.',
//     url: 'https://www.blackbullion.com/pathways/investing-101',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Investing.png',
//   },
//   {
//     title: 'Understanding investment risk',
//     duration: '535',
//     description:
//       'Examine how and why investors are risk-averse and look at the risk factors involved in making a decision to invest.',
//     url: 'https://www.blackbullion.com/pathways/investing-101',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/investmentrisk.png',
//   },
//   {
//     title: 'Stocks and bonds',
//     duration: '577',
//     description:
//       'An overview of stocks and bonds, with a focus on the finance fundamentals behind these instruments.',
//     url: 'https://www.blackbullion.com/pathways/advanced-investing',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/investmentrisk2.png',
//   },
//   {
//     title: 'Understanding stock prices',
//     duration: '278',
//     description: 'A break down of the basics involved in the stock market.',
//     url: 'https://www.blackbullion.com/pathways/advanced-investing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/I4_1.png',
//   },
//   {
//     title: 'The Basics',
//     duration: '318',
//     description: 'Discover the principles of ethical investing.',
//     url: 'https://www.blackbullion.com/pathways/ethical-investments',
//     image: 'https://prodcontent.blackbullion.com/images/featured/I5_1.png',
//   },
//   {
//     title: 'What is inflation?',
//     duration: '269',
//     description:
//       'Learn about the basics of inflation and the different types of inflation: demand-pull, cost-push and more.',
//     url: 'https://www.blackbullion.com/pathways/inflation',
//     image: 'https://prodcontent.blackbullion.com/images/featured/INF_1_1.png',
//   },
//   {
//     title: 'Inflation and student loans',
//     duration: '46',
//     description:
//       'Understand how inflation impacts your student loan repayments.',
//     url: 'https://www.blackbullion.com/pathways/inflation',
//     image: 'https://prodcontent.blackbullion.com/images/featured/INF_2_0.png',
//   },
//   {
//     title: 'How is inflation measured?',
//     duration: '131',
//     description: 'Understand how inflation is measured.',
//     url: 'https://www.blackbullion.com/pathways/inflation',
//     image: 'https://prodcontent.blackbullion.com/images/featured/INF_3_0.png',
//   },
//   {
//     title: 'Inflation and savings',
//     duration: '215',
//     description: 'Learn about the impact inflation has on savings.',
//     url: 'https://www.blackbullion.com/pathways/inflation',
//     image: 'https://prodcontent.blackbullion.com/images/featured/INF_4_0.png',
//   },
//   {
//     title: 'Understanding credit scores',
//     duration: '175',
//     description:
//       'Understand the process of credit scoring and how credit scores are determined.',
//     url: 'https://www.blackbullion.com/pathways/credit-score',
//     image: 'https://prodcontent.blackbullion.com/images/featured/CS1_0.png',
//   },
//   {
//     title: 'How can you improve your credit score?',
//     duration: '407',
//     description:
//       'Discover tips on how to potentially improve your credit score over time.',
//     url: 'https://www.blackbullion.com/pathways/credit-score',
//     image: 'https://prodcontent.blackbullion.com/images/featured/CS2_0.png',
//   },
//   {
//     title: 'The benefits',
//     duration: '185',
//     description:
//       'Learn why having a good credit score can have long term benefits.',
//     url: 'https://www.blackbullion.com/pathways/credit-score',
//     image: 'https://prodcontent.blackbullion.com/images/featured/CS3_0.png',
//   },
//   {
//     title: 'Welcome to MRU',
//     duration: '81',
//     description: 'A brief intro into what MRU is and its purpose.',
//     url: 'https://www.blackbullion.com/pathways/what-is-money-ready-for-uni',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Money-Ready_Meta-Image.png',
//   },
//   {
//     title: 'Student sign up process',
//     duration: '245',
//     description:
//       'A walk through how students can sign up to MRU and how to sign up students with access codes.',
//     url: 'https://www.blackbullion.com/pathways/what-is-money-ready-for-uni',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/gettingtoMRU.png',
//   },
//   {
//     title: 'Learning content',
//     duration: '473',
//     description: 'An overview of what topics are covered in the MRU package.',
//     url: 'https://www.blackbullion.com/pathways/what-is-money-ready-for-uni',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/MRUcontent.png',
//   },
//   {
//     title: 'Analytics',
//     duration: '109',
//     description: 'A guide on how to track access codes on analytics.',
//     url: 'https://www.blackbullion.com/pathways/what-is-money-ready-for-uni',
//     image: 'https://prodcontent.blackbullion.com/images/featured/analytics.png',
//   },
//   {
//     title: 'MRU resources',
//     duration: '161',
//     description: 'How to find marketing resources for MRU.',
//     url: 'https://www.blackbullion.com/pathways/what-is-money-ready-for-uni',
//     image: 'https://prodcontent.blackbullion.com/images/featured/resources.png',
//   },
//   {
//     title: 'Summary',
//     duration: '45',
//     description: 'A summary of all we have talked about in the pathway.',
//     url: 'https://www.blackbullion.com/pathways/what-is-money-ready-for-uni',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Ending.png',
//   },
//   {
//     title: 'Individual and bulk invites',
//     duration: '94',
//     description: 'Understand the purpose of invites and how to set them up.',
//     url: 'https://www.blackbullion.com/pathways/what-is-money-ready-for-uni',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Invites.png',
//   },
//   {
//     title: 'Introduction to pensions',
//     duration: '255',
//     description:
//       'Learn why saving into a pension is so important, how the pension system works, and what different types of pension are available to you.',
//     url: 'https://www.blackbullion.com/pathways/pensions-basic',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/intropensions.png',
//   },
//   {
//     title: 'Pensions 101',
//     duration: '142',
//     description:
//       'Watch our interview with The Pension Management Institution (PMI) as they explain the basics around pensions.',
//     url: 'https://www.blackbullion.com/pathways/pensions-basic',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/thumbnail_pmi-1.png',
//   },
//   {
//     title: 'State Pensions',
//     duration: '201',
//     description:
//       'Understand how state pensions work and when you are able to claim your state pension.',
//     url: 'https://www.blackbullion.com/pathways/pensions-basic',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Pe3_0.png',
//   },
//   {
//     title: 'Workplace pensions and auto-enrolment?',
//     duration: '247',
//     description:
//       'Understand how the workplace pension system works and what is auto-enrolment.',
//     url: 'https://www.blackbullion.com/pathways/pensions-advanced',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Pe4_0.png',
//   },
//   {
//     title: 'Salary Sacrifice',
//     duration: '171',
//     description:
//       'Understand what salary sacrifice is and what the potential benefits are.',
//     url: 'https://www.blackbullion.com/pathways/pensions-advanced',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Pe6_0.png',
//   },
//   {
//     title: 'Personal Pensions',
//     duration: '108',
//     description:
//       'Learn about the different types of personal pensions that are available.',
//     url: 'https://www.blackbullion.com/pathways/pensions-advanced',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Pe5_0.png',
//   },
//   {
//     title: 'Funding',
//     duration: '356',
//     description:
//       'All you need to know about your tuition fees and maintenance loans.',
//     url:
//       'https://www.blackbullion.com/pathways/nursing-and-healthcare-students',
//     image: 'https://prodcontent.blackbullion.com/images/featured/N1_1.1.png',
//   },
//   {
//     title: 'Learning Support Fund (LSF)',
//     duration: '163',
//     description:
//       "An overview of what you can expect from the NHS's Learning Support Fund.",
//     url:
//       'https://www.blackbullion.com/pathways/nursing-and-healthcare-students',
//     image: 'https://prodcontent.blackbullion.com/images/featured/N4_11.1.png',
//   },
//   {
//     title: 'Child Dependents Allowance (CDA)',
//     duration: '110',
//     description:
//       'Overview of the support available for eligible full-time students who have parental responsibility for a dependent child.',
//     url:
//       'https://www.blackbullion.com/pathways/nursing-and-healthcare-students',
//     image: 'https://prodcontent.blackbullion.com/images/featured/N3_0.png',
//   },
//   {
//     title: 'Travel and Dual Accommodation Expenses (TDAE)',
//     duration: '186',
//     description:
//       'A guide on how to get reimbursed for excess costs incurred when undertaking practical training on placements.',
//     url:
//       'https://www.blackbullion.com/pathways/nursing-and-healthcare-students',
//     image: 'https://prodcontent.blackbullion.com/images/featured/N4_0.png',
//   },
//   {
//     title: 'Exceptional Support Fund (ESF)',
//     duration: '126',
//     description:
//       'An overview of The Exceptional Support Fund (ESF) for students experiencing financial hardship during their studies who have exhausted all other means of funding.',
//     url:
//       'https://www.blackbullion.com/pathways/nursing-and-healthcare-students',
//     image: 'https://prodcontent.blackbullion.com/images/featured/N5_0.png',
//   },
//   {
//     title: 'Budgeting for Healthcare Students',
//     duration: '165',
//     description: 'A step by step guide on how to budget.',
//     url:
//       'https://www.blackbullion.com/pathways/nursing-and-healthcare-students',
//     image: 'https://prodcontent.blackbullion.com/images/featured/N6_0.png',
//   },
//   {
//     title: 'Budgeting Strategies',
//     duration: '125',
//     description:
//       "We look at strategies that you can use once you've worked out your budget.",
//     url:
//       'https://www.blackbullion.com/pathways/nursing-and-healthcare-students',
//     image: 'https://prodcontent.blackbullion.com/images/featured/N7_0.png',
//   },
//   {
//     title: 'Days 1 & 2',
//     duration: '220',
//     description:
//       "There are many great reasons to save money. Knowing how much money you have coming in and going out is essential if you're going to manage your cash efficiently and most banks\u2019 apps do that pretty much automatically for you.",
//     url:
//       'https://www.blackbullion.com/pathways/21-day-money-saving-challenge-global',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Artboard.png',
//   },
//   {
//     title: 'Day 3 to 5',
//     duration: '171',
//     description:
//       "There is always a way to increase your income or reduce your spending. From getting a part-time job to reducing your bills, we're going to give you some ideas on making your money go further.",
//     url:
//       'https://www.blackbullion.com/pathways/21-day-money-saving-challenge-global',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Artboard_12.png',
//   },
//   {
//     title: 'Day 6 to 8',
//     duration: '105',
//     description:
//       'The only way to feel in control of debt is to be on top of it. And that includes coming up with a good plan to manage it.',
//     url:
//       'https://www.blackbullion.com/pathways/21-day-money-saving-challenge-global',
//     image: 'https://prodcontent.blackbullion.com/images/featured/MB-3-1.jpg',
//   },
//   {
//     title: 'Day 9 to 11',
//     duration: '147',
//     description:
//       "The gap between the food we cook and the food we talk about has never been bigger. Let's look into some simple ways of saving money on food, whilst keeping the foodie in you satisfied.",
//     url:
//       'https://www.blackbullion.com/pathways/21-day-money-saving-challenge-global',
//     image: 'https://prodcontent.blackbullion.com/images/featured/MB-4-3.jpg',
//   },
//   {
//     title: 'Day 12 to 14',
//     duration: '74',
//     description:
//       "Still not sure if you can cut down on your spending? Look no further as here we're giving you a few simple ideas you can implement in an instant.",
//     url:
//       'https://www.blackbullion.com/pathways/21-day-money-saving-challenge-global',
//     image: 'https://prodcontent.blackbullion.com/images/featured/MB-4-5.jpg',
//   },
//   {
//     title: 'Day 15 to 17',
//     duration: '157',
//     description:
//       "It's important to track and understand how using cash, or card, effects our spending habits. Small adjustments can really make a difference to your monthly budget.",
//     url:
//       'https://www.blackbullion.com/pathways/21-day-money-saving-challenge-global',
//     image: 'https://prodcontent.blackbullion.com/images/featured/MB-6-1.jpg',
//   },
//   {
//     title: 'Day 18 & 19',
//     duration: '106',
//     description:
//       'Today is a perfect day to think about the long term money management. From sharing costs to work placements, find something that suits your lifestyle.',
//     url:
//       'https://www.blackbullion.com/pathways/21-day-money-saving-challenge-global',
//     image: 'https://prodcontent.blackbullion.com/images/featured/MB-7-2.jpg',
//   },
//   {
//     title: 'Day 20 & 21',
//     duration: '89',
//     description:
//       'Gambling has become one of the biggest problems for students but there are simple ways to avoid any serious loss or addiction.',
//     url:
//       'https://www.blackbullion.com/pathways/21-day-money-saving-challenge-global',
//     image: 'https://prodcontent.blackbullion.com/images/featured/MB-8-1.jpg',
//   },
//   {
//     title: 'Introduction',
//     duration: '50',
//     description: 'Understand what a scam is and who are especially targeted.',
//     url: 'https://www.blackbullion.com/pathways/scams',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Scam_1.1.png',
//   },
//   {
//     title: 'What are COVID-19 specific scams?',
//     duration: '38',
//     description:
//       'Understand that during these weird times it is important to protect yourself from scams.',
//     url: 'https://www.blackbullion.com/pathways/scams',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Scam_2.1.png',
//   },
//   {
//     title: 'Types of Scams',
//     duration: '316',
//     description:
//       'Learn about different types of scams from phishing emails to social media scams, to student visa scams and money mules.',
//     url: 'https://www.blackbullion.com/pathways/scams',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Scam_3.1.png',
//   },
//   {
//     title: 'Spot the signs',
//     duration: '96',
//     description:
//       'Know what to look out for when it comes to scams in order to protect yourself.',
//     url: 'https://www.blackbullion.com/pathways/scams',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Scam_4.1.png',
//   },
//   {
//     title: 'Top tips',
//     duration: '92',
//     description: 'Learn what you can do to protect yourself and/or others.',
//     url: 'https://www.blackbullion.com/pathways/scams',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Scam_5.png',
//   },
//   {
//     title: 'Reporting a scam',
//     duration: '48',
//     description:
//       'Learn how to report a scam to help track down and stop scammers.',
//     url: 'https://www.blackbullion.com/pathways/scams',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Scam_6.png',
//   },
//   {
//     title: 'Clearing: What it is, and who it\u2019s for?',
//     duration: '115',
//     description:
//       "Clearing allows unis to advertise what places they still have open. Applicants can search through open courses to find what's available, and decide what will best suit their interests.",
//     url: 'https://www.blackbullion.com/pathways/university-clearing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/C1_1.png',
//   },
//   {
//     title: 'Applying through Clearing: When to apply, and how?',
//     duration: '128',
//     description:
//       "Decided to apply for Uni through Clearing? There are two main things you'll need to know: when you can do it, and how.",
//     url: 'https://www.blackbullion.com/pathways/university-clearing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/C2_1.png',
//   },
//   {
//     title: 'Planning and preparing',
//     duration: '130',
//     description:
//       'Tips, tricks, and things to keep in mind when going through Clearing.',
//     url: 'https://www.blackbullion.com/pathways/university-clearing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/C3_1.png',
//   },
//   {
//     title: 'Clearing Plus',
//     duration: '201',
//     description: 'Understand the new Clearing system, Clearing Plus.',
//     url: 'https://www.blackbullion.com/pathways/university-clearing',
//     image: 'https://prodcontent.blackbullion.com/images/featured/C4_1.png',
//   },
//   {
//     title: 'Understanding investments',
//     duration: '536',
//     description: 'A brief introduction to the basics of simple investing.',
//     url: 'https://www.blackbullion.com/pathways/investing-basics-sa',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screenshot_2020-10-08_at_20.31.45.png',
//   },
//   {
//     title: 'Understanding investment risk',
//     duration: '575',
//     description:
//       'Examine how and why investors are risk-averse and look at the risk factors involved in making a decision to invest.',
//     url: 'https://www.blackbullion.com/pathways/investing-basics-sa',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Screenshot_2020-10-08_at_21.01.53.png',
//   },
//   {
//     title: 'Debt overview',
//     duration: '24',
//     description:
//       'An overview of what topics will be discussed in this debt pathway.',
//     url: 'https://www.blackbullion.com/pathways/debt-sa',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D1_0.png',
//   },
//   {
//     title: 'What is debt?',
//     duration: '336',
//     description:
//       "Debt is the obligation to pay money under an agreement, and so is credit. These agreements often involve interest. Let's look into what it all means.",
//     url: 'https://www.blackbullion.com/pathways/debt-sa',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D1_0.png',
//   },
//   {
//     title: 'What is compound interest?',
//     duration: '320',
//     description:
//       'Compound interest is the reason debt can easily get completely out of control. Let us show you how it all works.',
//     url: 'https://www.blackbullion.com/pathways/debt-sa',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D2_0.png',
//   },
//   {
//     title: 'Credit worthiness',
//     duration: '222',
//     description:
//       'We can\u2019t speak about debt without talking a bit about credit worthiness. Basically, credit worthiness establishes whether a lender will lend you the money you want to borrow.',
//     url: 'https://www.blackbullion.com/pathways/debt-sa',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D3_1.png',
//   },
//   {
//     title: 'Is debt good or bad?',
//     duration: '277',
//     description:
//       'Debt is neither absolutely good nor absolutely bad. It\u2019s a tool...much like a car. A car can cause accidents and hurt people and it can also help you to efficiently get around. It all depends on how you use it.',
//     url: 'https://www.blackbullion.com/pathways/debt-sa',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D4_1.png',
//   },
//   {
//     title: 'Student loan',
//     duration: '91',
//     description:
//       'All you need to know about your student loan from interest rates to repayments.',
//     url: 'https://www.blackbullion.com/pathways/debt-sa',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D5_1.png',
//   },
//   {
//     title: 'Dealing with debt',
//     duration: '116',
//     description:
//       'If you do find yourself having to deal with debt, what is the best way to pay it off?',
//     url: 'https://www.blackbullion.com/pathways/debt-sa',
//     image: 'https://prodcontent.blackbullion.com/images/featured/D6_0.png',
//   },
//   {
//     title: 'Intro to budgeting',
//     duration: '119',
//     description:
//       'Discover what budgeting is and some of the challenges related to budgeting as well as the solutions.',
//     url: 'https://www.blackbullion.com/pathways/budgeting',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B1.png',
//   },
//   {
//     title: 'Setting goals',
//     duration: '135',
//     description:
//       'Understand some common budgeting goals to help you figure out why you want to budget.',
//     url: 'https://www.blackbullion.com/pathways/budgeting',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B2.png',
//   },
//   {
//     title: 'Income',
//     duration: '158',
//     description:
//       'We explain what income is, how to get it, and how to include it in your budget.',
//     url: 'https://www.blackbullion.com/pathways/budgeting',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B3.png',
//   },
//   {
//     title: 'Expenses',
//     duration: '215',
//     description:
//       'We explain common expenses and categories of expenses, and how to include expenses in your budget.',
//     url: 'https://www.blackbullion.com/pathways/budgeting',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B4.png',
//   },
//   {
//     title: 'The nuts and bolts of budgeting',
//     duration: '253',
//     description:
//       'Dive into how to create a budget in simple steps as well as how to make a spreadsheet.',
//     url: 'https://www.blackbullion.com/pathways/budgeting',
//     image: 'https://prodcontent.blackbullion.com/images/featured/B5.png',
//   },
//   {
//     title: 'Different budgeting styles',
//     duration: '319',
//     description:
//       "When you create your budget, you'll want to find a way of doing things that works for you. We will look at four different budgeting methods, and we'll look at who is best suited to each approach.",
//     url: 'https://www.blackbullion.com/pathways/make-budgeting-work-for-you',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/different_budgeting_styles.png',
//   },
//   {
//     title: 'Budgeting your student loan',
//     duration: '209',
//     description:
//       'Learn how to create and keep a budget to give you confidence that your money situation is under control, so you can get back to focusing on the things that matter.',
//     url: 'https://www.blackbullion.com/pathways/make-budgeting-work-for-you',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Student_loan.png',
//   },
//   {
//     title: 'Common challenges',
//     duration: '177',
//     description:
//       "Budgeting is a matter of getting started, then sticking with it. Let's take a look at the obstacles you might face, and what to do about them.",
//     url: 'https://www.blackbullion.com/pathways/make-budgeting-work-for-you',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/buildinghabits.png',
//   },
//   {
//     title: "What we'll cover?",
//     duration: '48',
//     description: 'An overview of the topics discussed in this pathway.',
//     url: 'https://www.blackbullion.com/pathways/budgeting',
//     image: 'https://prodcontent.blackbullion.com/images/featured/Overview.png',
//   },
//   {
//     title: 'Why uni?',
//     duration: '261',
//     description:
//       'Why should you go to university? Examining 5 key arguments in favour of attending university: employability, degree premium, access to learning, personal development and new experiences.',
//     url: 'https://www.blackbullion.com/pathways/why-university-aus',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Why_University_Thumbnail_2x.png',
//   },
//   {
//     title: 'Why uni?',
//     duration: '240',
//     description:
//       'Why should you go to university? Examining 4 key arguments in favour of attending university: employability, access to learning, personal development and new experiences.',
//     url: 'https://www.blackbullion.com/pathways/why-university-nz',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Why_University_Thumbnail_2x.png',
//   },
//   {
//     title: 'Intro to budgeting',
//     duration: '119',
//     description:
//       'Discover what budgeting is and some of the challenges related to budgeting as well as the solutions.',
//     url: 'https://www.blackbullion.com/pathways/master-your-money',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/Budgeting_intro.png',
//   },
//   {
//     title: 'Setting goals',
//     duration: '135',
//     description:
//       'Understand some common budgeting goals to help you figure out why you want to budget.',
//     url: 'https://www.blackbullion.com/pathways/master-your-money',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/settinggoals.png',
//   },
//   {
//     title: 'The nuts and bolts of budgeting',
//     duration: '254',
//     description:
//       'Dive into how to create a budget in simple steps as well as how to make a spreadsheet.',
//     url: 'https://www.blackbullion.com/pathways/master-your-money',
//     image:
//       'https://prodcontent.blackbullion.com/images/featured/nutsandbolts.png',
//   },
// ]

export default actions;
