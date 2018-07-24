// this little helper script only injects the real path of the script call into the pages. That way, you need
// to adjust only the following constant to let all pages know about the target system.
//var SHOPSYSTEM='https://oekobox-online.com/v3/shop/bosshamerschhof2018/api/client.js';
var SHOPSYSTEM='../..//api/client.js';

// If you build your shop with a server side programming language like PHP, a better approach is a server side include,
// instead of this file.
(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.src = SHOPSYSTEM;
    d.getElementsByTagName('head')[0].appendChild(script);
}(document));