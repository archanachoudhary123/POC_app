
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

const mongoose = require('mongoose');
const User = mongoose.model('Login');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


module.exports = passport => {
    passport.use(new JwtStrategy(opts,(jwt_payload , done) => {
        console.log(jwt_payload);
        User.findById(jwt_payload.id)
        .then(user =>{
            if(user) {
                return done(null,user);

            }
            return done(done,false);
        })
        .catch(err =>console.log(err));
        
    })
    );
};
