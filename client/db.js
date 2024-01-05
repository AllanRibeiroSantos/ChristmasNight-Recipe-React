// JSONserver estava com problemas de CORS, e então preferi deixa-lo de usar e no lugar fazer um objeto javascript simples

export const db = {
  "receitas": [
    {
      "id": 0,
      "nome": "Cherry brownies",
      "pessoas": 16,
      "tempo_estimado": "20 minutos",
      "dificuldade": 1,
      "descricao": "",
      "valor_nutricional": {
        "caloria": [245, "12%"],
        "proteina": [3.6, "7%"],
        "carboidrato": [25.5, "10%"],
        "acucar": [21.7, "24%"],
        "gordura": [14.3, "20%"],
        "saturada": [7.2, "36%"]
      },
      "ingredientes": [
        "130 g butter",
        "150 g dark chocolate (70% cocoa solids)",
        "55 g cherries",
        "55 g roasted pecans",
        "225 g caster sugar",
        "55 g cocoa powder",
        "75 g plain flour",
        "3/4 teaspoon baking powder",
        "3 large free-range eggs",
        "50 g milk or dark chocolate, optional"
      ],
      "modo_de_preparo": [
        "Preheat the oven to 180ºC/gas 4. Line a 20cm square baking tin (or the equivalent) with greaseproof paper.",

        "Melt the butter and dark chocolate in a bowl over a saucepan of simmering water (don't let the bowl touch the water).",

        "Destone the cherries and roughly chop them along with the pecans. Stir into the melted chocolate, then take off the heat.",

        "In another bowl, add the sugar, then sift in the cocoa powder, flour and baking powder. Add to the melted chocolate mixture and stir till well combined.",

        "Beat the eggs and mix in. Roughly chop and stir through the milk or dark chocolate (if using).",

        "Transfer the mixture to the tin, then bake in the oven for 15 to 20 minutes. You want them a little gooey in the middle.",

        "Remove from the oven and cool in the tray, before cutting into squares."
      ],
      "video": "",
      "tag": "Bolos"
    },
    {
      "id": 1,
      "nome": "Bolo de maçã natalino sem glúten",
      "pessoas": 12,
      "tempo_estimado": "10 hora e 20 minutos",
      "dificuldade": 1,
      "descricao": "Este bolo sem glúten vai fazer você entrar no espírito festivo, com maçãs doces, canela, gengibre e noz-moscada",
      "valor_nutricional": {
        "caloria": [358, "18%"],
        "proteina": [6.1, "12%"],
        "carboidrato": [28.8, "11%"],
        "acucar": [18.4, "20%"],
        "gordura": [23.5, "34%"],
        "saturada": [10.8, "54%"]
      },
      "ingredientes": [
        "225 g butter , room temperature, plus extra for greasing",
        "450 g Bramley apples",
        "200 g medjool dates",
        "100 g raisins",
        "4 large free-range eggs",
        "150 g gluten-free white bread flour , plus a teaspoon extra",
        "100 g ground almonds",
        "1 1/2 tablespoons gluten-free baking powder",
        "1 teaspoon ground cinnamon",
        "1/2 teaspoon ground ginger",
        "1/2 nutmeg",
        "2 tablespoons pine nuts",
        "2 tablespoons demerara sugar"
      ],
      "modo_de_preparo": [
        "Preheat the oven to 180°C/350°F/gas 4. Grease the base of a round 23cm cake tin and line with greaseproof paper.",

        "Cut the butter into cubes and roughly chop the apples. Put the apples and butter in a food processor with the dates and half the raisins, and blitz until combined. Using a spatula, scrape into a bowl.",

        "Beat the eggs and mix one third into the bowl with the apple mixture.",

        "In a separate bowl, combine the flour, almonds, baking powder, cinnamon and ginger. Grate in the nutmeg. Add a third to the apple mixture and combine, then continue adding and combining the egg and flour mixtures in alternating batches until all mixed together.",

        "Finish by folding through the remaining raisins, then pour into the prepared cake tin.",

        "Combine the pine nuts, demerara sugar and extra teaspoon of gluten-free flour in a bowl and scatter over the cake mixture. Bake for 50 to 60 minutes, until golden and cooked through.",

        "Leave the cake to cool in the tin for 10 minutes before turning out onto a wire rack to cool completely."
      ],
      "video": "",
      "tag": "Bolos"
    },
    {
      "id": 2,
      "nome": "Biscoitos de gengibre",
      "pessoas": 14,
      "tempo_estimado": "40 minutos + tempo para esfriar",
      "dificuldade": 2,
      "descricao": "Kids will love making, decorating and eating these biscuits – but let's face it, more the eating! They can either be given as gifts, or used to decorate the tree. Make things more fun with a variety of cutters.",
      "valor_nutricional": {
        "caloria": [181, "9%"],
        "proteina": [2.1, "4%"],
        "carboidrato": [279, "11%"],
        "acucar": [11.5, "13%"],
        "gordura": [7.8, "11%"],
        "saturada": [4.5, "23%"],
        "sal": [0.2, "3%"],
        "fibra": [0.7, "-"]
      },
      "ingredientes": [
        "300 g plain flour",
        "1 teaspoon bicarbonate of soda",
        "2 teaspoons ground ginger",
        "1/2 teaspoon ground cinnamon",
        "1/2 teaspoon ground nutmeg",
        "125 g unsalted butter",
        "100 g soft light brown sugar",
        "3 tablespoons golden syrup"
      ],
      "modo_de_preparo": [
        "Preheat the oven to 180ºC/gas 4 and line 2 baking sheets with baking paper. In a large bowl combine the flour, bicarbonate of soda and the spices.",

        "Melt the butter, sugar and golden syrup in a pan over a low heat and stir until the sugar dissolves, then add it to the dry ingredients. Stir in until it forms a stiff dough, then cut it in half.",

        "Transfer the paper from the baking sheets to a work surface and place a portion of the dough on each. Roll out to 5mm thick, then cut out directly on the paper, leaving a 2cm gap between each. Save the cuttings to make more people, or round ginger biscuits.",

        "Carefully lift the papers back onto the baking sheets and bake the gingerbread in the oven for about 12 minutes, or until lightly golden.",

        "Leave to cool on the sheet for a few minutes – if you want to hang them as decorations, now is the time to pierce a hole through the top of each with a skewer – then move to a wire rack.",

        "Once cool, ice the gingerbread men and decorate with sprinkles, sweets and edible glitter."
      ],
      "video": "",
      "tag": "Cookie"
    },
    {
      "id": 3,
      "nome": "Devil's double choc malt cookies",
      "pessoas": 24,
      "tempo_estimado": "40 minutos + tempo de descanso",
      "dificuldade": 1,
      "descricao": "I was very young when the realisation of the joy of the cookie hit me. I've never really met anyone that doesn't like a freshly baked cookie, and if anything, since I was a kid it's just become easier to get pre-made commercial, average, frankly boring cookies. So for me, baking your own is the only way to pass that perfection down the family to the next generation. The problem is, what flavour to choose – there's so many. Well, I've made it easy for you – this, in my view, is the best flavour combo. Bake these, and your face will hurt because you'll be smiling, chewing and gurning for another one.",
      "valor_nutricional": {
        "caloria": [181, "9%"],
        "proteina": [3.4, "7%"],
        "carboidrato": [24.9, "10%"],
        "acucar": [18.1, "20%"],
        "gordura": [8.1, "12%"],
        "saturada": [4.6, "23%"]
      },
      "ingredientes": [
        "50 g unsalted butter",
        "200 g quality dark chocolate (70%)",
        "1 x 396 g tin of condensed milk",
        "25 g ground almonds",
        "2 heaped teaspoons Horlicks",
        "200 g self-raising flour",
        "100 g Maltesers",
        "50 g quality white chocolate"
      ],
      "modo_de_preparo": [
        "Melt the butter and chocolate in a pan on a low heat until smooth and combined, stirring occasionally.",

        "Remove from the heat and stir in the condensed milk, followed by the almonds and Horlicks.",

        "Sift in the flour and a pinch of sea salt, mix together, then chill in the fridge for 20 to 30 minutes (no longer).",

        "Once cool, but still pliable, smash up the Maltesers and roughly chop the white chocolate, then mix it all together.",

        "Preheat the oven to 170°C/325°F/gas 3.",

        "Divide the mixture into 24 equal-sized balls and place on a couple of large baking trays lined with greaseproof paper.",

        "Flatten each a little – like squashed golf balls (you can freeze them at this stage to bake another day if you like) – then bake for around 12 minutes, or until chewy in the middle and firm at the edges. Leave to sit in the tray for 5 minutes, then transfer to a wire rack to cool.",
        
        "If you want to take these devilish cookies to another level, either sandwich 2 cookies with a good spoonful of your favourite ice cream, or even some homemade marshmallow, and squeeze… heaven, or simply drizzle all the cookies with melted chocolate while they cool… amazing!"
      ],
      "video": "https://www.youtube.com/watch?v=_Tbs_0_9FGo",
      "tag": "Cookie"
    },
    {
      "id": 4,
      "nome": "Cupcakes de gengibre vegano",
      "pessoas": 12,
      "tempo_estimado": "35 minutos + tempo de resfriamento",
      "dificuldade": 1,
      "descricao": "Cupcakes simples com especiarias, cobertos com uma deliciosa cobertura de cream cheese.",
      "valor_nutricional": {
        "caloria": [430, "22%"],
        "proteina": [4.8, "10%"],
        "carboidrato": [56.9, "22%"],
        "acucar": [33.7, "37%"],
        "gordura": [25.6, "37%"],
        "saturada": [4, "20%"],
        "sal": [0.9, "15%"],
        "fibra": [1, "-"]
      },
      "ingredientes": [
        "350 g plain flour",
        "2 teaspoons baking powder",
        "1 teaspoon bicarbonate of soda",
        "1 level teaspoon ground ginger , plus extra for dusting",
        "1 heaped teaspoon ground cinnamon",
        "1/2 teaspoon sea salt",
        "220 ml vegetable oil",
        "200 g golden syrup",
        "60 g organic soya yogurt",
        "120 ml organic soya milk",
        "2 pieces of stem ginger , in syrup",
        "ICING",
        "200 g icing sugar",
        "55 g dairy-free margarine",
        "200 g dairy-free cream cheese"
      ],
      "modo_de_preparo": [
        "Preheat the oven to 180ºC/350ºF/gas 4. Line a 12-hole cupcake tray with paper cases.",

        "Sieve the flour, baking powder, bicarbonate of soda, ground ginger, cinnamon and salt into a large bowl.",

        "In another bowl, whisk the oil, golden syrup, yoghurt and milk together until well combined. Finely chop and add the stem ginger, along with 1 tablespoon of syrup from the jar. Fold in the flour mixture until smooth and combined.",

        "Divide the cake mixture between the paper cases, then place in the hot oven for 15 to 20 minutes, or until golden and an inserted skewer comes out clean. Leave to cool for a few minutes, then transfer to a wire rack to cool completely.",
        
        "Meanwhile, make the icing. Sieve the icing sugar into a large bowl, add the margarine, then beat until pale and fluffy. Add the cream cheese and whisk well until smooth and combined. Decorate the cooled cupcakes with the icing, dust with a little ground ginger, then tuck in."
      ],
      "video": "",
      "tag": "Cupcake"
    },
    {
      "id": 5,
      "nome": "The quickest berry tart",
      "pessoas": 12,
      "tempo_estimado": "45 minutos + descansando e esfriando",
      "dificuldade": 2,
      "descricao": "Although this recipe is a bit off the wall, the flavours and textures work so well together. Swedes absolutely love berries, and this is basically a berry tart that's crashed into an Eton mess to create an insanely easy and delicious dessert. I can't tell you how quick it is to knock together. If you're making this for a dinner party and want to work ahead a bit, just bake the pastry a few hours before, whip the cream mixture together and keep it covered in the fridge. Then, when you're ready to serve it, add the fruit and meringues. That way, the meringues will still be crunchy and create an exciting contrast with the soft cream and berries.",
      "valor_nutricional": {
        "caloria": [399, "20%"],
        "proteina": [4.2, "8%"],
        "carboidrato": [35.9, "14%"],
        "acucar": [17.2, "19%"],
        "gordura": [27.6, "39%"],
        "saturada": [16.8, "84%"],
        "sal": [0.1, "2%"],
        "fibra": [2.6, "-"]
      },
      "ingredientes": [
        "1 orange",
        "3 tablespoons vanilla sugar",
        "400 ml double cream",
        "600 g mixed seasonal berries , such as blackberries, loganberries, blueberries, red and white currants, good gooseberries",
        "4 meringue nests",
        "PASTRY",
        "250 g plain flour , plus extra for dusting",
        "50 g icing sugar , plus extra for dusting",
        "125 g unsalted butter , (cold)",
        "1 large free-range egg",
        "1 splash of milk",
        "olive oil , for greasing"
      ],
      "modo_de_preparo": [
        "You can make the pastry by hand, or in a food processor. If making it by hand, sieve the flour and icing sugar into a large mixing bowl from a height.",

        "Chop the butter into small cubes, then gently work the it into the flour and sugar with your fingers until the mixture resembles breadcrumbs.",

        "Beat the egg and add to the mix with the milk and gently work it together using your hands until you have a ball. Don't work the pastry too much or it will become elastic and chewy, not crumbly and short.",

        "Sprinkle some flour over the dough and a clean work surface, and pat the ball into a thick flat round. Sprinkle over a little more flour, then wrap the pastry in clingfilm and pop it into the fridge to rest for 30 minutes.",

        "Lightly oil the inside of a 25cm non-stick loose-bottomed tart tin.",

        "Dust a clean surface and a rolling pin with flour, then carefully roll out the pastry, turning it every so often, until you've got a circle about 0.5cm thick.",

        "Roll the pastry over the rolling pin, then unroll it into the tin, making sure you push it into all the sides.",

        "Trim off any extra pastry, and use it to patch any holes, then prick the base of the case all over with a fork, cover with clingfilm, and pop it into the freezer for 30 minutes.",

        "Preheat the oven to 180ºC/350ºF/gas 4.",

        "Line the pastry case with a large piece of greaseproof paper, pushing it right into the sides.",

        "Fill the pastry case right up to the top with uncooked rice, and bake blind for 10 minutes in the preheated oven. Take the case out, carefully remove the rice (save it for baking blind another time) and greaseproof paper, and return the case to the oven to cook for a further 10 minutes, until it's firm and almost biscuit-like. Leave to cool completely.",

        "Finely grate most of the orange zest into a bowl and whisk with 2 tablespoons of vanilla sugar and the cream until you get a silky mixture that forms soft peaks.",

        "Put half the berries into another bowl and use a fork to mash them up with the remaining tablespoon of vanilla sugar. Break up the meringue nests into rough pieces.",

        "Gently fold the mushed-up berries, and the meringue pieces, into the cream.",

        "Tip the cream mixture into the cooled tart case and gently shake it to help spread it out to the edges. Use a spatula or the back of a spoon to spread it out evenly, then sprinkle the remaining berries all over the top.",

        "Finely grate over the remaining orange zest and serve right away, with a dusting of icing sugar."
      ],
      "video": "https://www.youtube.com/watch?v=-oaqAwaLgvw",
      "tag": "Torta"
    },
    {
      "id": 6,
      "nome": "Home sweet home - Gingerbread house",
      "pessoas": 16,
      "tempo_estimado": "1 hora + descansando e resfriando",
      "dificuldade": 2,
      "descricao": "This magical gingerbread house is great for making with kids in the run-up to Christmas",
      "valor_nutricional": {
        "caloria": [384, "19%"],
        "proteina": [3.6, "7%"],
        "carboidrato": [67.8, "26%"],
        "acucar": [47.1, "52%"],
        "gordura": [10.7, "15%"],
        "saturada": [6.6, "33%"]
      },
      "ingredientes": [
        "4 tablespoons maple syrup",
        "2 tablespoons treacle",
        "160 g muscovado sugar",
        "2 teaspoons ground ginger",
        "2 teaspoons ground cinnamon",
        "200 g unsalted butter",
        "1 orange",
        "460 g plain flour , plus extra",
        "1/4 teaspoon baking powder",
        "2 free-range egg whites",
        "500 g icing sugar",
        "sweets and edible glitter , to decorate"
      ],
      "modo_de_preparo": [
        "Put a small saucepan on a low heat, add the maple syrup, treacle, sugar, ginger and cinnamon with 4 tablespoons of water and combine with a wooden spoon. Keep stirring until the mixture boils.",

        "Carefully take the pan off the heat, then cube up and add the butter, saving 1 piece. Let it all melt in, stirring to combine, then grate in the orange zest.",

        "Stir in the flour and baking powder until everything comes together as a dough – if it’s very sticky, dust it with flour, then wrap it in clingfilm and refrigerate for 30 minutes.",

        "Preheat the oven to 180°C/350°F/gas 4. Grease a baking tray with the reserved butter.",

        "Dust your work surface and rolling pin with flour, then roll the dough out to about 5mm thick.",

        "Using a sharp knife, cut out pieces for your house. You’ll need six pieces, in three different shapes measuring: sides: 20cm x 14cm; roof: 21cm x 7cm; gable ends: 10cm (base) x 14cm (outer sides) x 18cm (apex). Any scraps can be pressed together and rolled out for the next pieces.",

        "Place your house pieces onto the tray, leaving a 1cm gap between them. Bake in the oven for 12 to 15 minutes, or until golden and slightly darker around the edges.",

        "Let the gingerbread cool completely before icing.",

        "Whisk the egg whites to stiff peaks then, while whisking, gradually mix in the icing sugar till you have a dense stiff meringue. Use this to glue your gingerbread pieces together.",
        
        "Decorate with sweets, using more of the icing as glue, then very lightly dust with glitter for sparkly snow."
      ],
      "video": "",
      "tag": "Bolos"
    }
  ],
  "Banner": {
    "anuncioPrincipal": [
      {
        "id": 0,
        "titulo": "Cookies, bolos, cafés e mais.",
        "conteudo": "O Natal é uma época festiva em que a família se reúne para celebrar. Pensando nisso, montamos uma lista repleta de receitas deliciosas para a sua Noite de Natal.",
        "descricao_botao": "Confira nosso catálogo"
      }
    ],
    "novidades": [
      {
        "id": 0,
        "categoria": "Nova Receita",
        "titulo": "Biscoitos Amanteigados",
        "conteudo": "Biscoitos amanteigados com a ponta mergulhada na Nutella, o sabor do gengibre dá um toque natalino à essa maravilha.",
        "background": "endereço imagem",
        "img_art": "endereço imagem"
      },
      {
        "id": 1,
        "categoria": "Nova Receita",
        "titulo": "Biscoitos Amanteigados",
        "conteudo": "Biscoitos amanteigados com a ponta mergulhada na Nutella, o sabor do gengibre dá um toque natalino à essa maravilha.",
        "background": "endereço imagem",
        "img_art": "endereço imagem"
      },
      {
        "id": 2,
        "categoria": "Nova Receita",
        "titulo": "Biscoitos Amanteigados",
        "conteudo": "Biscoitos amanteigados com a ponta mergulhada na Nutella, o sabor do gengibre dá um toque natalino à essa maravilha.",
        "background": "endereço imagem",
        "img_art": "endereço imagem"
      },
      {
        "id": 3,
        "categoria": "Nova Receita",
        "titulo": "Biscoitos Amanteigados",
        "conteudo": "Biscoitos amanteigados com a ponta mergulhada na Nutella, o sabor do gengibre dá um toque natalino à essa maravilha.",
        "background": "endereço imagem",
        "img_art": "endereço imagem"
      }
    ]
  }
}