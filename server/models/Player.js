// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let PlayerSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      avatar_url: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
        min: 0,
      },
      // Unique Field/s
      // {{FIELD_NAME}}: {
      //   type: {{String, Number, Date}},
      //   [ required: {{true, false}}, ]
      //   [ minlength: {{Number}} }, ]
      //   [ maxlength: {{Number}} }, ]
      //   [ min: {{Number|new Date('YYYY-MM-DD')}} }, ]
      //   [ max: {{Number|new Date('YYYY-MM-DD')}} }, ]
      //   [ enum: globals.{{DATA}}_TYPES, ]
      // },
      // ...

      // Many-to-* Relationship/s
      // _{{FIELD_NAME}}: [{
      //   type: Schema.Types.ObjectId, ref: "Player",
      // }],
      // ...

      // One-to-* Relationship/s
      // _{{FIELD_NAME}}: {
      //   type: Schema.Types.ObjectId, ref: "Player",
      // },
      // ...
    },
    {
      timestamps: true,
    }
  );

  let Player = mongoose.model( 'Player', PlayerSchema );
}
