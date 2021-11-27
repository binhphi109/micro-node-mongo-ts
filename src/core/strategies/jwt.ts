import { UserDto } from './../../models/User';
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import config from "../config";
import UserRepository from "../../repositories/UserRepository";

module.exports = function () {
  // Use jwt strategy
  passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.tokenSecret,
  }, 
  function (jwt_payload, done) {

    UserRepository.findOne({
      id: jwt_payload.id,
    }).then(user => {

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    }).catch(err => {
      return done(err);
    });
  }));
};
