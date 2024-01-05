import { ModoDePreparoWrapper } from "./styles";

export default function ModoDePreparo() {
  return (
    <ModoDePreparoWrapper >
      <div className="modo-de-preparo__container">
        <h1>Modo de preparo</h1>
        <div className="linha"></div>
        <ol className="modo-de-preparo__lista">
          <li>
            Melt the butter and chocolate in a pan on a low heat until smooth and combined, stirring occasionally.
          </li>
          <li>
            Remove from the heat and stir in the condensed milk, followed by the almonds and Horlicks.
          </li>
          <li>
            Sift in the flour and a pinch of sea salt, mix together, then chill in the fridge for 20 to 30 minutes (no longer).
          </li>
          <li>
            Once cool, but still pliable, smash up the Maltesers and roughly chop the white chocolate, then mix it all together.
          </li>
          <li>
            Preheat the oven to 170°C/325°F/gas 3.
          </li>
          <li>
            Divide the mixture into 24 equal-sized balls and place on a couple of large baking trays lined with greaseproof paper.
          </li>
          <li>
            Flatten each a little – like squashed golf balls (you can freeze them at this stage to bake another day if you like) – then bake for around 12 minutes, or until chewy in the middle and firm at the edges. Leave to sit in the tray for 5 minutes, then transfer to a wire rack to cool.
          </li>
          <li>
            If you want to take these devilish cookies to another level, either sandwich 2 cookies with a good spoonful of your favourite ice cream, or even some homemade marshmallow, and squeeze… heaven, or simply drizzle all the cookies with melted chocolate while they cool… amazing!
          </li>
        </ol>
        <div className="linha"></div>
      </div>
    </ModoDePreparoWrapper>
  )
}