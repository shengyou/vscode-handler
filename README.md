# Visual Studio Code URL Handler
A `vscode://` *URL handler* for **[Visual Studio Code](https://code.visualstudio.com/)** on three main platform (Windows, Mac, Ubuntu).

Following string must be specified as an editor in your app:

```bash
vscode://open?url=file://%file&line=%line
```

Might not be stable right now. If something doesn't work, then feel free to [submit an issue](https://github.com/shengyou/vscode-handler/issues/new) on GitHub.

# Installing on Windows

#### Steps:

1. clone this repository
2. go to cloned folder
3. copy folder ```VS Code Protocol``` to ```C:\Program Files\``` folder
4. double click on ```C:\Program Files\VS Code Protocol\run_editor.reg``` file
5. agree to whatever Registry Editor asks you
6. delete cloned folder

#### Reference:

* [https://github.com/aik099/PhpStormProtocol](https://github.com/aik099/PhpStormProtocol)

#### TODO:

* wrap only necessary files into installer

#### Notice:

* only test on Windows 10



Installing on Mac
=================

#### Steps:

1. clone this repository
2. go to cloned folder
3. drag ```VS Code Handler.app``` to your ```/Applications``` directory
4. Open once to register the handler
5. delete cloned folder


#### Notice:

The app doesn’t open? [Don’t panic!](https://onflapp.wordpress.com/support/app-cannot-be-opened/)

#### Reference:

- [https://github.com/dhoulb/subl](https://github.com/dhoulb/subl)

#### Useful Links:

* [http://stackoverflow.com/questions/471581/how-to-map-a-custom-protocol-to-an-application-on-the-mac](http://stackoverflow.com/questions/471581/how-to-map-a-custom-protocol-to-an-application-on-the-mac)
* [http://superuser.com/questions/548119/how-do-i-configure-custom-url-handlers-on-os-x](http://superuser.com/questions/548119/how-do-i-configure-custom-url-handlers-on-os-x)



# Installing on Linux (Ubntu)

#### Steps:

1. clone this repository
2. run ```sudo bash install``` in console
3. delete cloned folder

#### Testing:

Type this url in any browser:
   ```vscode://open/?url=file:///etc/hosts```
   

#### Reference:

* [https://github.com/algorich/sublime-url-handler](https://github.com/algorich/sublime-url-handler)

#### Useful Links:

* [http://askubuntu.com/questions/514125/url-protocol-handlers-in-basic-ubuntu-desktop](http://askubuntu.com/questions/514125/url-protocol-handlers-in-basic-ubuntu-desktop)
* [http://unix.stackexchange.com/questions/55214/how-to-override-the-gnome-3-ssh-handler/100736#100736](http://unix.stackexchange.com/questions/55214/how-to-override-the-gnome-3-ssh-handler/100736#100736)
* [http://edoceo.com/howto/xfce-custom-uri-handler](http://edoceo.com/howto/xfce-custom-uri-handler)

#### Notice:

- works on any version of Ubuntu Linux Desktop
- works with both Firefox and Google Chrome



# Using with [Laravel Tracy](https://github.com/recca0120/laravel-tracy) 

#### Steps:

1. Install Laravel Tracy using composer command

   ```bash
   composer require recca0120/laravel-tracy
   ```

2. Include the service provider within `config/app.php`

   ```bash
   'providers' => [
       //...
       Recca0120\LaravelTracy\ServiceProvider::class,
       //...
   ];
   ```

3. Publish assets using artisan command

   ```bash
   php artisan vendor:publish --provider="Recca0120\LaravelTracy\ServiceProvider"
   ```

4. Setup your `config/tracy.php` like this

   ```bash
   return [
   	//...
       'editor' => 'vscode://open?url=file://%file&line=%line',
       //...
   ];
   ```

#### Reference:

* https://github.com/recca0120/laravel-tracy
* [https://pla.nette.org/en/how-open-files-in-ide-from-debugger](https://pla.nette.org/en/how-open-files-in-ide-from-debugger)

