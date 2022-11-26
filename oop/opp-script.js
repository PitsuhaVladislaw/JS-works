/*
function IWeapon{
    function fire() {} // декларация метода без имплементации. Ниже аналогично
}

function IEnergyGenerator{
    // тут уже два метода, которые должны будут реализовать классы:
    function generate_energy() {} // первый
    function load_fuel() {}       // второй
}

function IScanner{
    function scan() {}
}


// классы, реализующие интерфейсы:

class RocketLauncher() : IWeapon
{
    function fire(){
        // имплементация запуска ракеты
    }
}

class LaserGun() : IWeapon
{
    function fire(){
        // имплементация выстрела лазером
    }
}

class NuclearReactor() : IEnergyGenerator
{
    function generate_energy(){
        // имплементация генерации энергии ядерным реактором
    }
	
    function load_fuel(){
        // имплементация загрузки урановых стержней
    }
}

class RITEG() : IEnergyGenerator
{
    function generate_energy(){
        // имплементация генерации энергии РИТЭГ
    }
	
    function load_fuel(){
        // имплементация загрузки РИТЭГ-пеллет
    }
}

class Radar() : IScanner
{
    function scan(){
        // имплементация использования радиолокации
    }	
}

class Lidar() : IScanner
{
    function scan(){
        // имплементация использования оптической локации
    }
}

// класс - потребитель:
*/
/*
class Transformer() {
    // привет, композиция:
    IWeapon slot_weapon   // Интерфейсы указаны в качестве типов данных.
    IEnergyGenerator slot_energy_generator // Они могут принимать любые объекты,
    IScanner slot_scanner // которые имплементируют указанный интерфейс
	
    в параметрах методов интерфейс тоже указан как тип данных,
    метод может принимать объект любого класса,
    имплементирующий данный интерфейс:
    
    function install_weapon(IWeapon weapon){ 
        this.slot_weapon = weapon
    }
	
    function install_energy_generator(IEnergyGenerator energy_generator){
        this.slot_energy_generator = energy_generator
    }
	
    function install_scanner(IScanner scanner){
        this.slot_scanner = scanner
    }
}
// фабрика трансформеров

class TransformerFactory(){
    function build_some_transformer() {
    transformer = new Transformer()
    laser_gun = new LaserGun()
    nuclear_reactor = new NuclearReactor()
    radar = new Radar()
    
    transformer.install_weapon(laser_gun)
    transformer.install_energy_generator(nuclear_reactor)
    transformer.install_scanner(radar)
        return transformer
    }
}

// использование

transformer_factory = new TransformerFactory()
oleg = transformer_factory.build_some_transformer()

*/