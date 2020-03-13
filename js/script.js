

const personages = function (power, name) {

        this.level_life = 200,
        this.power = power,
        this.name = name,

        this.stroke = function (target) {
            return target.level_life = target.level_life - (this.power);
        }

}