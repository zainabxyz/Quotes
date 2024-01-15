var quotes=[{'quote':"“You only live once, but if you do it right, once is enough.”",
'author':"Mae West"   },
{'quote':"“Be the change that you wish to see in the world.”",
'author':"Mahatma Gandhi"  },
{'quote':"“If you tell the truth, you don't have to remember anything.”",
'author':" Mark Twain"   },
{'quote':"“A friend is someone who knows all about you and still loves you.”",
'author':" Elbert Hubbard "   },
{'quote':"“Always forgive your enemies; nothing annoys them so much.”",
'author':" Oscar Wilde"   }
]


function createQuotes(){
    var create=Math.floor(Math.random()*quotes.length)
    console.log(create);
    document.getElementById("quote").innerHTML=quotes[create].quote
    document.getElementById("auther").innerHTML=quotes[create].author
} 