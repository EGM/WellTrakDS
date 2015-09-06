
_dbg = true; _map = []; 
_cbMap = []; _cbId=0; _gfb = ""; 
_btl = null; _lvw = null; _ldg = null; 
_ynd = null; _nxt = null; 
_inf = null; _rec = null; _ioi = null; 
_sms = null; _eml = null; _smw = null;
_crp = null;


function App() 
{				
	this.GetObjects = function() { return _map.slice(0); }
	this.Exit = function( p1 ) { prompt( "@", "App.Exit("+p1 ); }
	this.Execute = function( p1 ) { prompt( "@", "App.Execute("+p1 ); } 
	this.StartApp = function( p1,p2 ) { prompt( "@", "App.StartApp("+p1+"\f"+p2 ); }
	this.StopApp = function( p1 ) { prompt( "@", "App.StopApp("+p1 ); }
	this.StartService = function() { prompt( "@", "App.StartService(" ); }
	this.StopService = function() { prompt( "@", "App.StopService(" ); }
	this.StartDebugServer = function() { prompt( "@", "App.StartDebugServer(" ); }
	this.LoadScript = function( url, callback ) { _LoadScript( url, callback ); }
	this.LoadPlugin = function( url ) { _LoadPlugin( url ); }
	this.Try = function( p1,p2 ) { return prompt( "@", "App.Try(\f"+p1+"\f"+p2 ); } 
	this.GetName = function() { return prompt( "@", "App.GetName(" ); }
	this.GetPath = function() { return prompt( "@", "App.GetPath(" ); }
	this.GetAppName = function() { return prompt( "@", "App.GetAppName(" ); }
	this.GetAppPath = function() { return prompt( "@", "App.GetAppPath(" ); }
	this.GetVersion = function() { return parseFloat(prompt( "@", "App.GetVersion(" )); }	
	this.IsNewVersion = function() { return prompt( "@", "App.IsNewVersion(" )=="true"; }	
	this.IsPro = function() { return prompt( "@", "App.IsPro(" )=="true"; }
	this.GetCountryCode = function() { return prompt( "@", "App.GetCountryCode(" ); }
	this.GetLanguageCode = function() { return prompt( "@", "App.GetLanguageCode(" ); }
	this.GetCountry = function() { return prompt( "@", "App.GetCountry(" ); }
	this.GetLanguage = function() { return prompt( "@", "App.GetLanguage(" ); }
	this.GetOptions = function() { return prompt( "@", "App.GetOptions(" ); }	
	this.GetSharedText = function( p1 ) { return prompt( "@", "App.GetSharedText("+p1 ); }
	this.GetSharedFiles = function() { var s = prompt( "@", "App.GetSharedFiles(" ); if(s.length) return s.split(","); else return null; }
	this.SetSharedApp = function( p1 ) { prompt( "@", "App.SetSharedApp("+p1 ); }
	this.KillApp = function( p1 ) { prompt( "@", "App.KillApp("+p1 ); }
	this.CreateShortcut = function( p1,p2,p3 ) { prompt( "@", "App.CreateShortcut("+p1+"\f"+p2+"\f"+p3 ); }
	this.GetBuildNum = function() { return parseInt( prompt( "@", "App.GetBuildNum(" )); }	
	this.GetModel = function() { return prompt( "@", "App.GetModel(" ); }	
	this.IsTablet = function() { return prompt( "@", "App.IsTablet(" )=="true"; }	
	this.SetOnError = function( p1 ) { prompt( "@", "App.SetOnError("+p1.name ); }
	this.GetIPAddress = function() { return prompt( "@", "App.GetIPAddress(" ); }
	this.GetMacAddress = function() { return prompt( "@", "App.GetMacAddress(" ); }
	this.Broadcast = function( p1,p2 ) { prompt( "@", "App.Broadcast("+p1+"\f"+p2 ); }
	this.SetOnBroadcast = function( p1 ) { prompt( "@", "App.SetOnBroadcast("+p1.name ); }
	this.SetData = function( p1,p2 ) { prompt( "@", "App.SetData("+p1+"\f"+p2 ); }
	this.GetData = function( p1 ) { return prompt( "@", "App.GetData("+p1 ); }	
	this.SetClipboardText = function( p1 ) { prompt( "@", "App.SetClipboardText("+p1 ); }
	this.EnableBackKey = function( p1 ) { prompt( "@", "App.EnableBackKey("+p1 ); }		
	this.Wait = function( secs ) { prompt( "@", "App.Wait("+secs ); }
	this.Alert = function( p1,p2 ) { prompt( "@", "App.Alert("+p1+"\f"+(p2?p2:"") ); }
	this.HideKeyboard = function( p1 ) { prompt( "@", "App.HideKeyboard("+p1 ); }
	this.TextToSpeech = function( p1,p2,p3 ) { prompt( "@", "App.TextToSpeech("+p1+"\f"+p2+"\f"+p3 ); }
	this.Debug = function( p1 ) { prompt( "@", "App.Debug("+p1 ); }
	this.SetDebugEnabled = function( enable ) { prompt( "@", "App.SetDebugEnabled("+enable ); _dbg=enable; }
	this.CreateDebug = function() { prompt( "@", "App.CreateDebug(" ); }
	this.ShowDebug = function( p1 ) { prompt( "@", "App.ShowDebug("+p1 ); }
	this.SendMail = function( address,subject,body,attach ) { prompt( "@", "App.SendMail("+address+"\f"+subject+"\f"+body+"\f"+attach ); }		
	this._Extract = function( p1 ) { prompt( "@", "App._Extract("+p1 ); }
	this.ExtractAssets = function( src,dest,overwrite ) { prompt( "@", "App.ExtractAssets(\f"+src+"\f"+dest+"\f"+overwrite ); }
	this.Vibrate = function( p1 ) { prompt( "@", "App.Vibrate("+p1 ); }
	this.ShowPopup = function( p1, p2 ) { prompt( "@", "App.ShowPopup("+p1+"\f"+p2 ); }
	this.ShowProgress = function( p1 ) { prompt( "@", "App.ShowProgress("+p1 ); }	
	this.HideProgress = function() { prompt( "@", "App.HideProgress(" ); }	
	this.ShowProgressBar = function( title,percent ) { prompt( "@", "App.ShowProgressBar(\f"+title+"\f"+percent ); }	
	this.UpdateProgressBar = function( percent ) { prompt( "@", "App.UpdateProgressBar(\f"+percent ); }	
	this.HideProgressBar = function() { prompt( "@", "App.HideProgressBar(" ); }	
	this.LoadText = function( p1,p2,p3 ) { return prompt( "@", "App.LoadText("+p1+"\f"+p2+"\f"+p3 ); }
	this.LoadNumber = function( p1,p2,p3 ) { return parseFloat(prompt( "@", "App.LoadNumber("+p1+"\f"+p2+"\f"+p3 )); }	
	this.LoadBoolean = function( p1,p2,p3 ) { return (prompt( "@", "App.LoadBoolean("+p1+"\f"+p2+"\f"+p3 )=="true"); }
	this.SaveText = function( p1,p2,p3 ) { prompt( "@", "App.SaveText("+p1+"\f"+p2+"\f"+p3 ); }
	this.SaveNumber = function( p1,p2,p3 ) { prompt( "@", "App.SaveNumber("+p1+"\f"+p2+"\f"+p3 ); }	
	this.SaveBoolean = function( p1,p2,p3 ) { prompt( "@", "App.SaveBoolean("+p1+"\f"+p2+"\f"+p3 ); }	
	this.GetTop = function() { return parseFloat(prompt( "@", "App.GetTop(" )); }
	this.GetScreenWidth = function() { return parseFloat(prompt( "@", "App.GetScreenWidth(" )); }
	this.GetScreenHeight = function() { return parseFloat(prompt( "@", "App.GetScreenHeight(" )); }
	this.GetScreenDensity = function() { return parseFloat(prompt( "@", "App.GetScreenDensity(" )); }
	this.GetDisplayWidth = function() { return parseFloat(prompt( "@", "App.GetDisplayWidth(" )); }
	this.GetDisplayHeight = function() { return parseFloat(prompt( "@", "App.GetDisplayHeight(" )); }
	this.GetDefaultOrientation = function() { return prompt( "@", "App.GetDefaultOrientation(" ); }	
	this.GetOrientation = function() { return prompt( "@", "App.GetOrientation(" ); }	
	this.SetOrientation = function( p1 ) { prompt( "@", "App.SetOrientation("+p1 ); }	
	this.GetRotation = function() { return parseInt(prompt( "@", "App.GetRotation(" )); }	
	this.PreventScreenLock = function( p1 ) { prompt( "@", "App.PreventScreenLock("+p1 ); }	
	this.PreventWifiSleep = function( p1 ) { prompt( "@", "App.PreventWifiSleep(" ); }
	this.SetTitle = function( p1 ) { prompt( "@", "App.SetTitle("+p1 ); }	
	this.SetMenu = function( p1,p2 ) { prompt( "@", "App.SetMenu("+p1+"\f"+p2 ); }
	this.ShowMenu = function( p1,p2 ) { prompt( "@", "App.ShowMenu(" ); }		
	this.AddLayout = function( p1 ) { prompt( "@", "App.AddLayout("+ p1.id ); }	
	this.RemoveLayout = function( p1 ) { prompt( "@", "App.RemoveLayout("+ p1.id ); }
	this.DestroyLayout = function( p1 ) { prompt( "@", "App.DestroyLayout("+ p1.id ); }	
	this.MakeFolder = function( p1 ) { prompt( "@", "App.MakeFolder("+p1 ); }	
	this.GetPrivateFolder = function( name ) { return prompt( "@", "App.GetPrivateFolder\f"+name ); }	
	this.FolderExists = function( p1 ) { return prompt( "@", "App.FolderExists("+p1 )=="true"; }
	this.FileExists = function( p1 ) { return prompt( "@", "App.FileExists("+p1 )=="true"; }
	this.IsFolder = function( p1 ) { return prompt( "@", "App.IsFolder("+p1 )=="true"; }
	this.ListFolder = function( path,filter,limit,options ) { return eval(prompt( "@", "App.ListFolder(\f"+path+"\f"+filter+"\f"+limit+"\f"+options )); }
	this.GetExternalFolder = function() { return prompt( "@", "App.GetExternalFolder(" ); }
	this.ReadFile = function( file ) { return prompt( "@", "App.ReadFile("+file ); }
	this.WriteFile = function( file,text,mode ) { prompt( "@", "App.WriteFile("+file+"\f"+text+"\f"+mode ); }	
	this.OpenFile = function( p1,p2,p3 ) { prompt( "@", "App.OpenFile("+p1+"\f"+p2+"\f"+p3 ); }	
	this.OpenUrl = function( url ) { prompt( "@", "App.OpenUrl("+url); }
	this.DeleteFile = function( p1 ) { prompt( "@", "App.DeleteFile("+p1); }
	this.CopyFile = function( p1,p2 ) { prompt( "@", "App.CopyFile("+p1+"\f"+p2); }
	this.CopyFolder = function( src,dest,overwrite ) { prompt( "@", "App.CopyFolder(\f"+src+"\f"+dest+"\f"+overwrite); }
	this.DeleteFolder = function( p1 ) { prompt( "@", "App.DeleteFolder("+p1); }
	this.RenameFile = function( p1,p2 ) { prompt( "@", "App.RenameFile("+p1+"\f"+p2); }
	this.RenameFolder = function( p1,p2 ) { prompt( "@", "App.RenameFile("+p1+"\f"+p2); }
	this.GetLastButton = function() { var ret = prompt( "@", "App.GetLastButton(" ); if( ret ) return (_map[ret]); else return null; }
	this.GetLastToggle = function() { var ret = prompt( "@", "App.GetLastToggle(" ); if( ret ) return (_map[ret]); else return null; }
	this.GetLastCheckBox = function() { var ret = prompt( "@", "App.GetLastCheckBox(" ); if( ret ) return (_map[ret]); else return null; }
	this.GetLastImage = function() { var ret = prompt( "@", "App.GetLastImage(" ); if( ret ) return (_map[ret]); else return null; }
	this.IsBluetoothOn = function() { return prompt( "@", "App.IsBluetoothOn(" )=="true"; }
	this.IsScreenOn = function() { return prompt( "@", "App.IsScreenOn(" )=="true"; }
	this.GoToSleep = function() { prompt( "@", "App.GoToSleep(" ); }	
	this.SetScreenBrightness = function( level ) { prompt( "@", "App.SetScreenBrightness\f"+level); }
	this.GetMetadata = function( file,keys ) { return prompt( "@", "App.GetMetadata(\f"+file+"\f"+keys); }
	this.SetAlarm = function( type,id,callback,time,interval ) { return prompt( "@", "App.SetAlarm(\f"+type+"\f"+id+"\f"+(callback?callback.name:null)+"\f"+time+"\f"+interval); }
	
	//These objects auto-release when layout is destroyed.		
	this.CreateLayout = function( p1,p2 ) { var ret = prompt( "@", "App.CreateLayout("+p1+"\f"+p2 ); if( ret ) return new Lay(ret); else return null; }	
	this.CreateImage = function( p1,p2,p3,p4,p5,p6 ) { var ret = prompt( "@", "App.CreateImage("+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6 );  if( ret ) return new Img(ret); else return null; }	
	this.CreateButton = function( p1,p2,p3,p4 ) { var ret = prompt( "@", "App.CreateButton("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); if( ret ) return new Btn(ret); else return null;  }		
	this.CreateToggle = function( p1,p2,p3,p4 ) { var ret = prompt( "@", "App.CreateToggle("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); if( ret ) return new Tgl(ret); else return null;  }		
	this.CreateCheckBox = function( p1,p2,p3,p4 ) { var ret = prompt( "@", "App.CreateCheckBox("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); if( ret ) return new Chk(ret); else return null;  }		
	this.CreateSpinner = function( p1,p2,p3,p4 ) { var ret = prompt( "@", "App.CreateSpinner("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); if( ret ) return new Spn(ret); else return null; }		
	this.CreateSeekBar = function( p1,p2,p3 ) { var ret = prompt( "@", "App.CreateSeekBar("+p1+"\f"+p2+"\f"+p3 ); if( ret ) return new Skb(ret); else return null; }		
	this.CreateText = function( p1,p2,p3,p4 ) { var ret = prompt( "@", "App.CreateText("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); if( ret ) return new Txt(ret); else return null; }		
	this.CreateTextEdit = function( p1,p2,p3,p4 ) { var ret = prompt( "@", "App.CreateTextEdit("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); if( ret ) return new Txe(ret); else return null; }		
	this.CreateList = function( p1,p2,p3,p4 ) { var ret = prompt( "@", "App.CreateList("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); if( ret ) return new Lst(ret); else return null; }	
	this.CreateWeb = function( p1,p2,p3 ) { var ret = prompt( "@", "App.CreateWeb("+p1+"\f"+p2+"\f"+p3 ); if( ret ) return new Web(ret); else return null; }	
	this.CreateWebView = function( p1,p2,p3 ) { var ret = prompt( "@", "App.CreateWeb("+p1+"\f"+p2+"\f"+p3 ); if( ret ) return new Web(ret); else return null; }	
	this.CreateScroller = function( p1,p2,p3 ) { var ret = prompt( "@", "App.CreateScroller("+p1+"\f"+p2+"\f"+p3 ); if( ret ) return new Scr(ret); else return null; }	
	this.CreateCameraView = function( width,height,options ) { var ret = prompt( "@", "App.CreateCameraView("+width+"\f"+height+"\f"+options );  if( ret ) return new Cam(ret); else return null; }	
	this.CreateVideoView = function( width,height,options ) { var ret = prompt( "@", "App.CreateVideoView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new Vid(ret); else return null; }	

	//These objects auto-release (ie. single instance)
	this.CreateYesNoDialog = function( p1 ) { if( _ynd ) _ynd.Release(); var ret = prompt( "@", "App.CreateYesNoDialog("+p1 ); if( ret ) _ynd = new Ynd(ret); else _ynd = null; return _ynd; }		
	this.CreateListDialog = function( p1,p2,p3 ) { if( _ldg ) _ldg.Release(); var ret = prompt( "@", "App.CreateListDialog("+p1+"\f"+p2+"\f"+p3 ); if( ret ) _ldg = new Ldg(ret); else _ldg = null; return _ldg; }	
	this.CreateListView = function( p1,p2 ) { if( _lvw ) _lvw.Release(); var ret = prompt( "@", "App.CreateListView("+p1+"\f"+p2 ); if( ret ) _lvw = new Lvw(ret); else _lvw = null; return _lvw; }	
	this.CreateBluetoothList = function( p1 ) { if( _btl ) _btl.Release(); var ret = prompt( "@", "App.CreateBluetoothList("+p1 ); if( ret) _btl = new Btl(ret); else _btl = null; return _btl; }	
	this.CreateAudioRecorder = function() { if( _rec ) _rec.Release(); var ret = prompt( "@", "App.CreateAudioRecorder(" ); if( ret) _rec = new Rec(ret); else _rec = null; return _rec; }
	this.CreateIOIO = function( p1 ) { if( _ioi ) _ioi.Release(); var ret = prompt( "@", "App.CreateIOIO("+p1 ); if( ret) _ioi = new IOIO(ret); else _ioi = null; return _ioi; }
	this.CreateSMS = function() { if( _sms ) _sms.Release(); var ret = prompt( "@", "App.CreateSMS(" ); if( ret) _sms = new SMS(ret); else _sms = null; return _sms; }
	this.CreateEmail = function( p1,p2 ) { if( _eml ) _eml.Release(); var ret = prompt( "@", "App.CreateEmail("+p1+"\f"+p2 ); if( ret) _eml = new EMAIL(ret); else _eml = null; return _eml; }
	this.CreateSmartWatch = function( p1 ) { if( _smw ) _smw.Release(); var ret = prompt( "@", "App.CreateSmartWatch("+p1 ); if( ret) _smw = new SMW(ret); else _smw = null; return _smw; }
	this.CreateCrypt = function( options ) { if( _crp ) _crp.Release(); var ret = prompt( "@", "App.CreateCrypt(\f"+options ); if( ret) _crp = new Crp(ret); else _crp = null; return _crp; }
	
	//These objects need releasing manually.
	this.CreateDialog = function( title,options ) { var ret = prompt( "@", "App.CreateDialog(\f"+title+"\f"+options ); if( ret ) return new Dlg(ret); else return null; }		
	this.CreateMediaPlayer = function() { var ret = prompt( "@", "App.CreateMediaPlayer(" ); if( ret ) return new Aud(ret); else return null; }
	this.CreateSensor = function( p1,p2 ) { var ret = prompt( "@", "App.CreateSensor("+p1+"\f"+p2 ); if( ret ) return new Sns(ret); else return null; }		
	this.CreateLocator = function( p1,p2 ) { var ret = prompt( "@", "App.CreateLocator("+p1+"\f"+p2 ); if( ret ) return new Loc(ret); else return null; }		
	this.CreateNetClient = function( p1 ) { var ret = prompt( "@", "App.CreateNetClient("+p1 ); if( ret ) return new Net(ret); else return null; }
	this.CreateNxtRemote = function() { var ret = prompt( "@", "App.CreateNxtRemote(" ); if( ret ) return new Nxt(ret,null); else return null; }	
	this.CreateWebServer = function( p1,p2 ) { var ret = prompt( "@", "App.CreateWebServer("+p1+"\f"+p2 ); if( ret ) return new Wbs(ret); else return null; }	
	this.CreateUSBSerial = function( baudRate,dataBits,stopBits,parity ) { var ret = prompt( "@", "App.CreateUSBSerial(\f"+baudRate+"\f"+dataBits+"\f"+stopBits+"\f"+parity ); if( ret ) return new Usb(ret); else return null; }	
	this.CreateService = function( name,callback ) { var ret = prompt( "@", "App.CreateService("+name+"\f"+(callback?callback.name:null) ); if( ret ) return new Svc(ret); else return null; }	
	this.CreateObject = function( name ) { try { return eval( "new "+name+"()" ); } catch(e) { return null; } }	
	this.CreateSynth = function( p1 ) { var ret = prompt( "@", "App.CreateSynth("+p1 ); if( ret ) return new Syn(ret); else return null; }	
	this.CreateBluetoothSerial = function( mode ) { var ret = prompt( "@", "App.CreateBluetoothSerial(\f"+mode ); if( ret ) return new Bts(ret); else return null; }	
	this.CreateZipUtil = function( mode ) { var ret = prompt( "@", "App.CreateZipUtil(\f"+mode ); if( ret ) return new Zip(ret); else return null; }	
	this.CreateDownloader = function() { var ret = prompt( "@", "App.CreateDownloader(" ); if( ret ) return new Dwn(ret); else return null; }	
	this.CreateMediaStore = function() { var ret = prompt( "@", "App.CreateMediaStore(" ); if( ret ) return new Med(ret); else return null; }	
	this.CreatePlayStore = function() { var ret = prompt( "@", "App.CreatePlayStore(" ); if( ret ) return new Ply(ret); else return null; }	
	this.CreateNotification = function( options ) { var ret = prompt( "@", "App.CreateNotification(\f"+options ); if( ret ) return new Not(ret); else return null; }	
	
	//Helper classes.
	this.CreateNxt = function() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); }
	this.CreateTabs = function( list,width,height,options ) { return new _Tabs( list,width,height,options ); }
}
	
	
function Obj( id )
{
	_map[id] = this; 
	this.id = id;
    this.Release = function() { prompt( this.id, "Obj.Release(" ); }        
    this.SetVisibility = function( p1 ) { prompt( this.id, "Obj.SetVisibility("+p1 ); }    
    this.GetVisibility = function() { return prompt( this.id, "Obj.GetVisibility(" ); }   
    this.SetPadding = function( p1,p2,p3,p4 ) { prompt( this.id, "Obj.SetPadding("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    this.SetMargins = function( left,top,right,bottom ) { prompt( this.id, "Obj.SetMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom ); }
    this.SetBackground = function( p1,p2 ) { prompt( this.id, "Obj.SetBackground("+p1+"\f"+p2 ); }
    this.SetBackColor = function( p1 ) { prompt( this.id, "Obj.SetBackColor("+p1 ); }  
    this.SetBackGradient = function( p1,p2,p3,p4,p5,p6,p7 ) { prompt( this.id, "Obj.SetBackGradient(Linear\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6+"\f"+p7 ); }  
    this.SetBackGradientRadial = function( p1,p2,p3,p4,p5,p6,p7 ) { prompt( this.id, "Obj.SetBackGradient(Radial\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6+"\f"+p7 ); }  
    this.SetPosition = function( p1,p2,p3,p4 ) { prompt( this.id, "Obj.SetPosition("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    this.SetSize = function( p1,p2 ) { prompt( this.id, "Obj.SetSize("+p1+"\f"+p2 ); }
    this.GetWidth = function() { return prompt( this.id, "Obj.GetWidth(" ); }  
    this.GetHeight = function() { return prompt( this.id, "Obj.GetHeight(" ); }   
    this.GetPosition = function() { return eval(prompt( this.id, "Obj.GetPosition(" )); } 
}

function Lay( id )
{
	var obj = new Obj( id );
	obj.GetType = function() { return "Layout"; }
    obj.SetOrientation = function( p1 ) { prompt( obj.id, "Lay.SetOrientation("+p1 ); }    
    obj.AddChild = function( child,order ) { prompt( obj.id, "Lay.AddChild(\f"+(child?child.id:null)+"\f"+order ); }
    obj.RemoveChild = function( child ) { prompt( obj.id, "Lay.RemoveChild("+(child?child.id:null) ); }    
    obj.DestroyChild = function( child ) { prompt( obj.id, "Lay.DestroyChild("+(child?child.id:null) ); }    
    obj.ChildToFront = function( child ) { prompt( obj.id, "Lay.ChildToFront("+(child?child.id:null) ); }
    obj.GetChildOrder = function( child ) { return parseInt(prompt( obj.id, "Lay.GetChildOrder(\f"+(child?child.id:null) )); }  
    obj.Animate = function( type,callback ) { prompt( obj.id, "Lay.Animate("+type+"\f"+(callback?callback.name:null) ); }
    obj.SetTouchable = function( p1 ) { prompt( obj.id, "Lay.SetTouchable("+p1 ); }
    return obj;
}

function Img( id )
{
    var obj = new Obj( id ); 
    obj._auto = true;
    obj.GetType = function() { return "Image"; }
    obj.Clear = function() { if( obj._auto ) prompt( obj.id, "Img.Clear(" ); else { this.Draw("c"); } } 
    obj.Update = function() { if( obj._auto ) prompt( obj.id, "Img.Update(" ); else { prompt( obj.id, "Img.Batch("+_gfb ); _gfb = ""; } }
    obj.SetAutoUpdate = function( onoff ) { obj._auto=onoff; prompt( obj.id, "Img.SetAutoUpdate\f"+onoff ); }
    obj.SetName = function( p1 ) { prompt( obj.id, "Img.SetName("+p1 ); }
    obj.GetName = function() { return prompt( obj.id, "Img.GetName(" ); }
    obj.SetImage = function( image,width,height,options ) { 
		if( typeof image=="string" ) prompt( obj.id, "Img.LoadImage(\f"+image+"\f"+width+"\f"+height+"\f"+options ); 
		else prompt( obj.id, "Img.CopyImage(\f"+(image?image.id:null)+"\f"+width+"\f"+height+"\f"+options );
	}
    obj.SetSize = function( p1,p2 ) { prompt( this.id, "Img.SetSize("+p1+"\f"+p2 ); }
    obj.GetHeight = function() { return parseFloat(prompt( obj.id, "Img.GetHeight(" )); }
    obj.GetWidth = function() { return parseFloat(prompt( obj.id, "Img.GetWidth(" )); }
    obj.GetAbsHeight = function() { return parseFloat(prompt( obj.id, "Img.GetAbsHeight(" )); }
    obj.GetAbsWidth = function() { return parseFloat(prompt( obj.id, "Img.GetAbsWidth(" )); }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Img.SetOnTouch("+p1.name ); } 
    obj.SetOnTouchUp = function( p1 ) { prompt( obj.id, "Img.SetOnTouchUp("+p1.name ); }  
    obj.SetOnTouchMove = function( p1 ) { prompt( obj.id, "Img.SetOnTouchMove("+p1.name ); }
    obj.SetOnTouchDown = function( p1 ) { prompt( obj.id, "Img.SetOnTouchDown("+p1.name ); } 
    obj.SetOnLongTouch = function( p1 ) { prompt( obj.id, "Img.SetOnLongTouch("+p1.name ); } 
    obj.SetOnLoad = function( callback ) { prompt( obj.id, "Img.SetOnLoad\f"+callback.name ); }   
    obj.SetTouchable = function( p1 ) { prompt( obj.id, "Img.SetTouchable("+p1 ); }
    obj.SetMaxRate = function( p1 ) { prompt( obj.id, "Img.SetMaxRate("+p1 ); }
    obj.DrawImage = function( image,x,y,w,h,angle ) { 
		if( obj._auto ) prompt( obj.id, "Img.DrawImage\f"+(image?image.id:null)+"\f"+x+"\f"+y+"\f"+w+"\f"+h+"\f"+angle ); 
		else this.Draw( "i", (image?image.id:null), x,y,(w?w:-1),(h?h:-1),angle ); }
	obj.DrawImageMtx = function( image,matrix ) { 
		if( obj._auto ) prompt( obj.id, "Img.DrawImageMtx\f"+(image?image.id:null)+"\f"+matrix ); 
		else this.Draw( "m", (image?image.id:null), matrix ); }
    obj.DrawPoint = function( x,y ) { 
		if( obj._auto ) prompt( obj.id, "Img.DrawPoint("+x+"\f"+y ); else this.Draw( "p", null, x,y ); }
    obj.DrawCircle = function( x,y,radius ) { 
		if( obj._auto ) prompt( obj.id, "Img.DrawCircle("+x+"\f"+y+"\f"+radius );
		else this.Draw( "e", null, x,y,radius ); }
    obj.DrawArc = function( x1,y1,x2,y2,start,sweep ) { 
		if( obj._auto ) prompt( obj.id, "Img.DrawArc("+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+start+"\f"+sweep );
		else this.Draw( "a", null, x1,y1,x2,y2,start,sweep ); }
    obj.DrawLine = function( x1,y1,x2,y2 ) { 
		if( obj._auto ) prompt( obj.id, "Img.DrawLine("+x1+"\f"+y1+"\f"+x2+"\f"+y2 ); 
		else this.Draw( "l", null, x1,y1,x2,y2 ); }
    obj.DrawRectangle = function( x1,y1,x2,y2 ) { 
		if( obj._auto ) prompt( obj.id, "Img.DrawRect("+x1+"\f"+y1+"\f"+x2+"\f"+y2 );
		else this.Draw( "r", null, x1,y1,x2,y2 ); }
    obj.DrawText = function( txt,x,y ) { 
		if( obj._auto ) prompt( obj.id, "Img.DrawText("+txt+"\f"+x+"\f"+y ); 
		else this.Draw( "t", txt, x, y, 0,0,0 ); }
	obj.SetAlpha = function( alpha ) { if( obj._auto ) prompt( obj.id, "Img.SetAlpha("+alpha ); else this.Draw( "k",null,alpha ); }
    obj.SetColor = function( clr ) { if( obj._auto ) prompt( obj.id, "Img.SetColor("+clr ); else this.Draw( "o", clr ); }
    obj.SetTextSize = function( size ) { if( obj._auto ) prompt( obj.id, "Img.SetTextSize("+size ); else this.Draw( "x",null,size ); }
    obj.SetFontFile = function( file ) { if( obj._auto ) prompt( obj.id, "Img.SetFontFile(\f"+file ); else this.Draw( "f",file ); }  
    obj.SetLineWidth = function( width ) { if( obj._auto ) prompt( obj.id, "Img.SetLineWidth("+width ); else this.Draw( "w",null,width ); }
    obj.SetPaintColor = function( clr ) { if( obj._auto ) prompt( obj.id, "Img.SetPaintColor("+clr ); else this.Draw( "n",clr ); }
    obj.SetPaintStyle = function( style ) { if( obj._auto ) prompt( obj.id, "Img.SetPaintStyle("+style ); else this.Draw( "s",style ); } 
    obj.Rotate = function( p1,p2,p3 ) { prompt( obj.id, "Img.Rotate("+p1+"\f"+p2+"\f"+p3 ); }
    obj.Move = function( p1,p2 ) { prompt( obj.id, "Img.Move("+p1+"\f"+p2 ); }
    obj.Scale = function( p1,p2 ) { prompt( obj.id, "Img.Scale("+p1+"\f"+p2 ); }
    obj.Skew = function( p1,p2 ) { prompt( obj.id, "Img.Skew("+p1+"\f"+p2 ); }
    obj.Transform = function( matrix ) { prompt( obj.id, "Img.Transform(\f"+matrix ); }
    obj.Reset = function() { prompt( obj.id, "Img.Reset(" ); }
    obj.Save = function( fileName ) { prompt( obj.id, "Img.Save\f"+fileName ); }
    obj.Draw = function( func, p1, p2, p3, p4, p5, p6, p7 ) {
		if( _gfb.length > 2 ) _gfb += "\f";
		_gfb += func + "¬" + p1 + "¬" + p2 + "¬" + p3 + "¬" + p4 + "¬" + p5 + "¬" + p6 + "¬" + p7;
	}
    return obj;
}

function Btn( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "Button"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Btn.SetOnClick("+p1.name ); }
    obj.SetOnTouchEx = function( p1 ) { prompt( obj.id, "Btn.SetOnClick("+p1 ); }
    obj.SetText = function( p1 ) { prompt( obj.id, "Btn.SetText("+p1 ); }   
    obj.GetText = function() { return prompt( obj.id, "Btn.GetText(" ); }  
    obj.SetTextColor = function( p1 ) { prompt( obj.id, "Btn.SetTextColor("+p1 ); }    
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Btn.SetTextSize("+p1 ); }            
	return obj;
}

function Tgl( id )
{
    var obj = new Obj( id );
    obj.GetType = function() { return "Toggle"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Tgl.SetOnClick("+p1.name ); }
    obj.SetText = function( p1 ) { prompt( obj.id, "Tgl.SetText("+p1 ); }
    obj.GetText = function() { return prompt( obj.id, "Tgl.GetText(" ); }  
    obj.SetTextColor = function( p1 ) { prompt( obj.id, "Tgl.SetTextColor("+p1 ); }    
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Tgl.SetTextSize("+p1 ); } 
    obj.SetChecked = function( p1 ) { prompt( obj.id, "Tgl.SetChecked("+p1 ); }   
    obj.GetChecked = function() { return prompt( obj.id, "Tgl.GetChecked(" )=="true"; }    
    return obj;      
}

function Chk( id )
{
    var obj = new Obj( id );
    obj.GetType = function() { return "CheckBox"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Chk.SetOnClick("+p1.name ); }
    obj.SetText = function( p1 ) { prompt( obj.id, "Chk.SetText("+p1 ); }    
    obj.GetText = function() { return prompt( obj.id, "Chk.GetText(" ); }   
    obj.SetTextColor = function( p1 ) { prompt( obj.id, "Chk.SetTextColor("+p1 ); }    
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Chk.SetTextSize("+p1 ); } 
    obj.SetChecked = function( p1 ) { prompt( obj.id, "Chk.SetChecked("+p1 ); }   
    obj.GetChecked = function() { return prompt( obj.id, "Chk.GetChecked(" )=="true"; }    
    return obj;      
}

function Spn( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "Spinner"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Spn.SetOnClick("+p1.name ); }
    obj.SetText = function( p1 ) { prompt( obj.id, "Spn.SetText("+p1 ); }   
    obj.GetText = function() { return prompt( obj.id, "Spn.GetText(" ); } 
    obj.SetTextColor = function( p1 ) { prompt( obj.id, "Spn.SetTextColor("+p1 ); }    
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Spn.SetTextSize("+p1 ); } 
    obj.SetList = function( p1, p2 ) { prompt(obj.id, "Spn.SetList\f"+p1+"\f"+p2); }
    return obj;
}

function Skb( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "SeekBar"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Skb.SetOnClick("+p1.name ); }
    obj.GetValue = function() { return parseFloat(prompt( obj.id, "Skb.GetValue(" )); }  
    obj.SetValue = function( p1 ) { prompt( obj.id, "Skb.SetValue("+p1 ); }
    obj.SetRange = function( p1 ) { prompt( obj.id, "Skb.SetRange("+p1 ); }
    obj.SetMaxRate = function( p1 ) { prompt( obj.id, "Skb.SetMaxRate("+p1 ); }
    return obj;
}

function Ibn( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "ImageButton"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Ibn.SetOnClick("+p1.name ); }
    obj.SetText = function( p1 ) { prompt( obj.id, "Ibn.SetText("+p1 ); }    
    obj.SetTextColor = function( p1 ) { prompt( obj.id, "Ibn.SetTextColor("+p1 ); }    
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Ibn.SetTextSize("+p1 ); } 
    return obj;           
}

function Txt( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "Text"; }
    obj.SetText = function( text ) { prompt( obj.id, "Txt.SetText("+text ); }  
    obj.SetHtml = function( html ) { prompt( obj.id, "Txt.SetHtml("+html ); }  
    obj.GetText = function() { return prompt( obj.id, "Txt.GetText(" ); }  
    obj.SetTextColor = function( color ) { prompt( obj.id, "Txt.SetTextColor("+color ); }    
    obj.SetTextSize = function( size ) { prompt( obj.id, "Txt.SetTextSize("+size ); }   
    obj.SetFontFile = function( file ) { prompt( obj.id, "Txt.SetFontFile(\f"+file ); }   
    obj.GetLineCount = function() { return parseInt(prompt( obj.id, "Txt.GetLineCount(")); }   
    obj.GetMaxLines = function() { return parseInt(prompt( obj.id, "Txt.GetMaxLines(")); }   
    obj.GetLineTop = function( line ) { return parseFloat(prompt( obj.id, "Txt.GetLineTop("+line )); }   
    obj.GetLineStart = function( line ) { return parseInt(prompt( obj.id, "Txt.GetLineStart("+line )); }  
    obj.SetEllipsize = function( mode ) { prompt( obj.id, "Txt.SetEllipsize(\f"+mode ); } 
    obj.SetTextShadow = function( radius,dx,dy,color ) { prompt( obj.id, "Txt.SetTextShadow(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }   
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Txt.SetOnTouch("+callback.name ); } 
    obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "Txt.SetOnTouchUp("+callback.name ); }  
    obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "Txt.SetOnTouchMove("+callback.name ); }
    obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "Txt.SetOnTouchDown("+callback.name ); } 
    obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Txt.SetOnLongTouch("+callback.name ); }   
    obj.SetTouchable = function( touchable ) { prompt( obj.id, "Txt.SetTouchable("+touchable ); }
    return obj;
}

function Txe( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "TextEdit"; }   
    obj.SetText = function( p1 ) { prompt( obj.id, "Txe.SetText("+p1 ); } 
    obj.SetHtml = function( p1 ) { prompt( obj.id, "Txe.SetHtml("+p1 ); }    
    obj.InsertText = function( text,start,end ) { prompt( obj.id, "Txe.InsertText(\f"+text+"\f"+start ); }  
    obj.ReplaceText = function( text,start,end ) { prompt( obj.id, "Txe.ReplaceText(\f"+text+"\f"+start+"\f"+end ); }  
    obj.GetText = function() { return prompt( obj.id, "Txe.GetText(" ); }
    obj.SetOnChange = function( p1 ) { prompt( obj.id, "Txe.SetOnChange("+p1.name ); }   
    obj.SetTextColor = function( p1 ) { prompt( obj.id, "Txe.SetTextColor("+p1 ); }    
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Txe.SetTextSize("+p1 ); }  
    obj.GetLineCount = function() { return parseInt(prompt( obj.id, "Txe.GetLineCount(")); } 
    obj.GetMaxLines = function() { return parseInt(prompt( obj.id, "Txe.GetMaxLines(")); }  
    obj.GetLineTop = function( p1 ) { return parseFloat(prompt( obj.id, "Txe.GetLineTop("+p1 )); }   
    obj.GetLineStart = function( p1 ) { return parseInt(prompt( obj.id, "Txe.GetLineStart("+p1 )); } 
    obj.SetCursorPos = function( p1 ) { prompt( obj.id, "Txe.SetCursorPos("+p1 ); }  
    obj.GetCursorPos = function() { return parseInt(prompt( obj.id, "Txe.GetCursorPos(")); }   
    obj.GetCursorLine = function() { return parseInt(prompt( obj.id, "Txe.GetCursorLine(")); }   
    obj.Undo = function() { prompt( obj.id, "Txe.Undo("); }   
    obj.Redo = function() { prompt( obj.id, "Txe.Redo("); }  
    obj.ClearHistory = function() { prompt( obj.id, "Txe.ClearHistory("); }  
    return obj;
}

function Lst( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "List"; }
    obj.SetPadding = function( p1,p2,p3,p4 ) { prompt( this.id, "Lst.SetPadding("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    obj.SetList = function( p1, p2 ) { var p="Lst.SetList\f"+p1+"\f"+p2; prompt(obj.id,p); }
    obj.GetList = function( p1 ) { return prompt( obj.id, "Lst.GetList("+p1 ); }
    obj.SelectItem = function( p1,p2,p3 ) { var p="Lst.SelectItem(\f"+p1+"\f"+p2+"\f"+p3; prompt(obj.id,p); }
    obj.SelectItemByIndex = function( index,scroll ) { var p="Lst.SelectItemByIndex(\f"+index+"\f"+scroll; prompt(obj.id,p); }
    obj.ScrollToItem = function( p1,p2 ) { var p="Lst.ScrollToItem(\f"+p1+"\f"+p2; prompt(obj.id,p); }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Lst.SetOnClick("+p1.name ); }    
    obj.SetOnLongTouch = function( p1 ) { prompt( obj.id, "Lst.SetOnLongClick("+p1.name ); }    
    obj.SetTextColor = function( p1 ) { prompt( obj.id, "Lst.SetTextColor1("+p1 ); } 
    obj.SetTextColor1 = function( p1 ) { prompt( obj.id, "Lst.SetTextColor1("+p1 ); } 
    obj.SetTextColor2 = function( p1 ) { prompt( obj.id, "Lst.SetTextColor2("+p1 ); }
    obj.SetHiTextColor1 = function( p1 ) { prompt( obj.id, "Lst.SetHiTextColor1("+p1 ); }
    obj.SetHiTextColor2 = function( p1 ) { prompt( obj.id, "Lst.SetHiTextColor2("+p1 ); } 
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Lst.SetTextSize("+p1 ); }  
    obj.SetTextMargins = function( p1,p2,p3,p4 ) { prompt( this.id, "Lst.SetTextMargins("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    obj.SetEllipsize = function( mode ) { prompt( obj.id, "Lst.SetEllipsize1(\f"+mode ); } 
    obj.SetEllipsize1 = function( mode ) { prompt( obj.id, "Lst.SetEllipsize1(\f"+mode ); }
    obj.SetEllipsize2 = function( mode ) { prompt( obj.id, "Lst.SetEllipsize2(\f"+mode ); }
    obj.SetTextShadow = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow1(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    obj.SetTextShadow1 = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow1(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    obj.SetTextShadow2 = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow2(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    obj.SetDivider = function( height,color ) { prompt( obj.id, "Lst.SetDivider(\f"+height+"\f"+color ); }
    obj.SetFontFile = function( file ) { prompt( obj.id, "Lst.SetFontFile(\f"+file ); }  
    return obj;
}

function Web( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "WebView"; }
    obj.SetOnProgress = function( p1 ) { prompt( obj.id, "Web.SetOnProgress("+p1.name ); }  
    obj.LoadHtml = function( p1,p2,p3 ) { prompt(obj.id,"Web.LoadHtml\f"+p1+"\f"+p2+"\f"+p3); }
    obj.LoadUrl = function( p1,p2 ) { prompt(obj.id,"Web.LoadUrl\f"+p1+"\f"+p2); }
    obj.Back = function() { prompt(obj.id,"Web.Back(" ); }
    obj.Forward = function() { prompt(obj.id,"Web.Forward(" ); }
    obj.Execute = function( p1 ) { prompt( obj.id, "Web.Execute("+p1 ); } 
    return obj;
}

function Scr( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "Scroller"; }
    obj.AddChild = function( p1 ) { prompt( this.id, "Scr.AddChild("+p1.id ); }
    obj.ScrollTo = function( p1,p2 ) { prompt( this.id, "Scr.ScrollTo\f"+p1+"\f"+p2 ); }
    obj.ScrollBy = function( p1,p2 ) { prompt( this.id, "Scr.ScrollBy\f"+p1+"\f"+p2 ); }
    return obj;
}

function Dlg( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "Dialog"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Dlg.SetOnClick("+p1.name ); }
    obj.AddLayout = function( p1 ) { prompt( obj.id, "Dlg.AddLayout("+ p1.id ); }	
	obj.RemoveLayout = function( p1 ) { prompt( obj.id, "Dlg.RemoveLayout("+ p1.id ); }	
	obj.Show = function() { prompt( obj.id, "Dlg.Show(" ); }
	obj.Hide = function() { prompt( obj.id, "Dlg.Hide(" ); }
	obj.Dismiss = function() { prompt( obj.id, "Dlg.Dismiss(" ); }
	return obj;
}

function Ynd( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "YesNoDialog"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Ynd.SetOnClick("+p1.name ); }
    return obj;
}

function Lvw( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "ListView"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Lvw.SetOnClick("+p1.name ); }   
    return obj; 
}

function Ldg( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "ListDialog"; } 
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Ldg.SetOnClick("+p1.name ); }
    return obj;    
}

function Btl( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "BluetoothList"; }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Btl.SetOnClick("+p1.name ); }
    obj.SetOnTouchEx = function( p1 ) { prompt( obj.id, "Btl.SetOnClick("+p1 ); }
    return obj;    
}

function Net( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "NetClient"; }
    obj.Connect = function( p1,p2 ) { return prompt( obj.id, "Net.Connect("+p1+"\f"+p2 )=="true"; }
    obj.SetOnConnect = function( p1 ) { prompt( obj.id, "Net.SetOnConnect("+p1.name ); }
    obj.Disconnect = function() { prompt( obj.id, "Net.Disconnect(" ); }
	obj.IsEnabled = function() { return prompt( obj.id, "Net.IsEnabled(" )=="true"; } 
    obj.IsConnected = function() { return prompt( obj.id, "Net.IsConnected(" )=="true"; }   
    obj.SetTimeout = function( p1 ) { prompt( obj.id, "Net.SetTimeout("+p1 ); } 
    obj.SendText = function( p1,p2 ) { prompt( obj.id, "Net.SendText("+p1+"\f"+p2 ); }
    obj.ReceiveText = function( p1 ) { return prompt( obj.id, "Net.ReceiveText("+p1 ); }        
    obj.ReceiveFile = function( p1,p2 ) { return prompt( obj.id, "Net.ReceiveFile("+p1+"\f"+p2 ); }        
    obj.DownloadFile = function( p1 ) { return prompt( obj.id, "Net.DownloadFile("+p1 ); } 
    obj.SetOnDownload = function( p1 ) { prompt( obj.id, "Net.SetOnDownload("+p1.name ); }    
    obj.GetBroadcastAddress = function() { return prompt( obj.id, "Net.GetBroadcastAddress(" ); } 
    obj.SendDatagram = function( p1,p2,p3,p4 ) { prompt( obj.id, "Net.SendDatagram("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    obj.ReceiveDatagram = function( p1,p2,p3 ) { return prompt( obj.id, "Net.ReceiveDatagram("+p1+"\f"+p2+"\f"+p3 ); } 
    obj.SetOnReceive = function( p1 ) { prompt( obj.id, "Net.SetOnReceive("+p1.name ); }           
    obj.AutoReceive = function( p1,p2,p3 ) { return prompt( obj.id, "Net.AutoReceive("+p1+"\f"+p2+"\f"+p3 ); } 
    return obj;   
}

function Aud( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "MediaPlayer"; }
    obj.SetFile = function( p1 ) { prompt( obj.id, "Aud.SetFile("+p1 ); }    
    obj.Close = function() { prompt( obj.id, "Aud.Close(" ); }
    obj.Play = function() { prompt( obj.id, "Aud.Play(" ); }
    obj.Pause = function() { prompt( obj.id, "Aud.Pause(" ); }
    obj.Stop = function() { prompt( obj.id, "Aud.Stop(" ); }    
    obj.IsReady = function() { return prompt( obj.id, "Aud.IsReady(" )=="true"; } 
	obj.IsPlaying = function() { return prompt( obj.id, "Aud.IsPlaying(" )=="true"; } 
    obj.IsLooping = function() { return prompt( obj.id, "Aud.IsLooping(" )=="true"; }    
    obj.SeekTo = function( p1 ) { prompt( obj.id, "Aud.SeekTo("+p1 ); }
    obj.GetPosition = function() { return parseFloat(prompt( obj.id, "Aud.GetPosition(" )); }  
    obj.GetDuration = function() { return parseFloat(prompt( obj.id, "Aud.GetDuration(" )); }  
    obj.SetVolume = function( p1,p2 ) { prompt( obj.id, "Aud.SetVolume("+p1+"\f"+p2 ); }
    obj.SetOnReady = function( p1 ) { prompt( obj.id, "Aud.SetOnReady("+p1.name ); } 
    obj.SetOnComplete = function( p1 ) { prompt( obj.id, "Aud.SetOnComplete("+p1.name ); }    
    obj.SetOnSeekDone = function( p1 ) { prompt( obj.id, "Aud.SetOnSeekDone("+p1.name ); }  
    return obj;  
}

function Dwn( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "Downloader"; }
    obj.Download = function( url,dest ) { prompt( obj.id, "Dwn.Download(\f"+url+"\f"+dest ); }
    obj.IsComplete = function() { return prompt( obj.id, "Dwn.IsComplete(" )=="true"; } 
    obj.GetProgress = function() { return parseFloat(prompt( obj.id, "Dwn.GetProgress(" )); }  
    obj.GetSize = function() { return parseFloat(prompt( obj.id, "Dwn.GetSize(" )); }  
    obj.SetOnComplete = function( callback ) { prompt( obj.id, "Dwn.SetOnComplete(\f"+callback.name ); }    
    return obj;  
}

function Med( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "MediaStore"; }  
    obj.QueryMedia = function( filter,sort,options ) { prompt( obj.id, "Med.QueryMedia(\f"+filter+"\f"+sort+"\f"+options ); }
    obj.SetOnMediaResult = function( callback ) { prompt( obj.id, "Med.SetOnMediaResult(\f"+callback.name ); } 
    obj.QueryArtists = function( filter,sort,options ) { prompt( obj.id, "Med.QueryArtists(\f"+filter+"\f"+sort+"\f"+options ); }
    obj.SetOnArtistsResult = function( callback ) { prompt( obj.id, "Med.SetOnArtistsResult(\f"+callback.name ); } 
    obj.QueryAlbums = function( filter,sort,options ) { prompt( obj.id, "Med.QueryAlbums(\f"+filter+"\f"+sort+"\f"+options ); }
    obj.SetOnAlbumsResult = function( callback ) { prompt( obj.id, "Med.SetOnAlbumsResult(\f"+callback.name ); } 
    obj.GetAlbumArt = function( img,id,options ) { return prompt( obj.id, "Med.GetAlbumArt(\f"+(img?img.id:null)+"\f"+id+"\f"+options )=="true"; }
    obj.GetSongArt = function( img,id,options ) { return prompt( obj.id, "Med.GetSongArt(\f"+(img?img.id:null)+"\f"+id+"\f"+options )=="true"; }
    return obj;  
}

function Ply( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "PlayStore"; }
    obj.GetBillingInfo = function( prodIDs,callback ) { ret = prompt( obj.id, "Ply.GetBillingInfo(\f"+prodIDs+"\f"+callback.name ); }
    obj.Purchase = function( prodID,token,callback ) { ret = prompt( obj.id, "Ply.Purchase(\f"+prodID+"\f"+token+"\f"+callback.name ); }
    obj.GetPurchases = function( callback ) { ret = prompt( obj.id, "Ply.GetPurchases(\f"+callback.name ); }
    return obj;  
}

function Rec( id )
{
    var obj = new Obj( id );
    obj.GetType = function() { return "AudioRecorder"; }
    obj.SetFile = function( p1 ) { prompt( obj.id, "Rec.SetFile("+p1 ); }        
    obj.Record = function( p1 ) { prompt( obj.id, "Rec.Record("+p1 ); }  
    return obj;      
}

function Sns( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "Sensor"; }
    obj.SetOnChange = function( p1 ) { prompt( obj.id, "Sns.SetOnChange("+p1.name ); } 
    obj.SetMinChange = function( p1 ) { prompt( obj.id, "Sns.SetMinChange("+p1 ); } 
    obj.Start = function() { prompt( obj.id, "Sns.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Sns.Stop(" ); }
    obj.GetAzimuth = function() { return parseFloat(prompt( obj.id, "Sns.GetAzimuth(" )); }  
    obj.GetPitch = function() { return parseFloat(prompt( obj.id, "Sns.GetPitch(" )); }
    obj.GetRoll = function() { return parseFloat(prompt( obj.id, "Sns.GetRoll(" )); }
    return obj;
}

function Loc( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "Locator"; }
    obj.SetOnChange = function( p1 ) { prompt( obj.id, "Loc.SetOnChange("+p1.name ); } 
    obj.Start = function() { prompt( obj.id, "Loc.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Loc.Stop(" ); }
    obj.SetRate = function( p1 ) { prompt( obj.id, "Loc.SetRate("+p1 ); } 
    obj.GetDistanceTo = function( p1,p2 ) { return parseFloat(prompt( obj.id, "Loc.GetDistanceTo("+p1+"\f"+p2 )); }
    obj.GetBearingTo = function( p1,p2 ) { return parseFloat(prompt( obj.id, "Loc.GetBearingTo("+p1+"\f"+p2 )); }
    return obj;
}

function Cam( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "CameraView"; }
    obj.StartPreview = function() { prompt( obj.id, "Cam.StartPreview(" ); }   
    obj.StopPreview = function() { prompt( obj.id, "Cam.StopPreview(" ); } 
    obj.Focus = function() { prompt( obj.id, "Cam.Focus(" ); }
    obj.SetFocusMode = function( mode ) { prompt( obj.id, "Cam.SetFocusMode\f"+mode ); }   
    obj.SetPictureSize = function( p1,p2 ) { prompt( obj.id, "Cam.SetPictureSize("+p1+"\f"+p2 ); } 
    obj.GetPictureSizes = function() { return prompt( obj.id, "Cam.GetPictureSizes(" ); }  
    obj.TakePicture = function( p1 ) { prompt( obj.id, "Cam.TakePicture("+p1 ); }   
    obj.Stream = function( p1,p2,p3,p4,p5 ) { prompt( obj.id, "Cam.Stream("+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5 ); }
    obj.SetFlash = function( onoff ) { prompt( obj.id, "Cam.SetFlash("+onoff ); } 
    obj.SetSound = function( onoff ) { prompt( obj.id, "Cam.SetSound("+onoff ); } 
    obj.GetImageWidth = function() { return parseInt(prompt( obj.id, "Cam.GetImageWidth(" )); }  
    obj.GetImageHeight = function() { return parseInt(prompt( obj.id, "Cam.GetImageHeight(" )); }  
    obj.GetCameraCount = function() { return parseInt(prompt( obj.id, "Cam.GetCameraCount(" )); } 
    obj.SetPreviewImage = function( p1 ) { prompt( obj.id, "Cam.SetPreviewImage("+(p1?p1.id:null) ); } 
    obj.MotionMosaic = function( p1,p2,p3,p4,p5 ) { prompt( obj.id, "Cam.MotionMosaic("+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+(p5?p5.id:null) ); }
    obj.ReportColors = function( list,callback,sampSize,maxRate ) { prompt( obj.id, "Cam.ReportColors(\f"+list+"\f"+callback.name+"\f"+sampSize+"\f"+maxRate ); } 
    obj.AutoCapture = function( p1,p2,p3 ) { prompt( obj.id, "Cam.AutoCapture("+p1+"\f"+p2+"\f"+p3 ); } 
    obj.SetOnReady = function( callback ) { prompt( obj.id, "Cam.SetOnReady("+callback.name ); }
    obj.SetOnMotion = function( callback ) { prompt( obj.id, "Cam.SetOnMotion("+callback.name ); }
    obj.SetOnPicture = function( callback ) { prompt( obj.id, "Cam.SetOnPicture\f"+callback.name ); }
    return obj;   
}

function Vid( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "VideoView"; }
    obj.SetFile = function( p1 ) { prompt( obj.id, "Vid.SetFile("+p1 ); }    
    obj.Play = function() { prompt( obj.id, "Vid.Play(" ); }
    obj.Pause = function() { prompt( obj.id, "Vid.Pause(" ); }
    obj.Stop = function() { prompt( obj.id, "Vid.Stop(" ); }   
    obj.IsReady = function() { return prompt( obj.id, "Vid.IsReady(" )=="true"; }  
	obj.IsPlaying = function() { return prompt( obj.id, "Vid.IsPlaying(" )=="true"; } 
    obj.SeekTo = function( p1 ) { prompt( obj.id, "Vid.SeekTo("+p1 ); }
    obj.GetPosition = function() { return parseFloat(prompt( obj.id, "Vid.GetPosition(" )); }  
    obj.GetDuration = function() { return parseFloat(prompt( obj.id, "Vid.GetDuration(" )); }  
    obj.SetOnReady = function( callback ) { prompt( obj.id, "Vid.SetOnReady("+callback.name ); } 
    obj.SetOnComplete = function( callback ) { prompt( obj.id, "Vid.SetOnComplete("+callback.name ); }    
    obj.SetOnError = function( callback ) { prompt( obj.id, "Vid.SetOnError("+callback.name ); }
    return obj;   
}

function Nxt( id, nxtHelper )
{
    var obj = new Obj( id );  
    var nxtHelp = nxtHelper;
    obj.GetType = function() { return "NxtRemote"; }
    obj.Connect = function( p1 ) { return prompt( obj.id, "Nxt.Connect("+p1 )=="true"; }
    obj.SetOnConnect = function( p1 ) { prompt( obj.id, "Nxt.SetOnConnect("+p1.name ); }
    obj.SetOnConnectEx = function( p1 ) { prompt( obj.id, "Nxt.SetOnConnect("+p1 ); }
    obj.Disconnect = function() { prompt( obj.id, "Nxt.Disconnect(" ); }
	obj.IsEnabled = function() { return prompt( obj.id, "Nxt.IsEnabled(" )=="true"; } 
	obj.IsBluetoothEnabled = function() { return prompt( obj.id, "Nxt.IsEnabled(" )=="true"; } 
	obj.RequestEnable = function() { prompt( obj.id, "Nxt.RequestEnable(" ); }
	obj.IsPaired = function( p1 ) { return prompt( obj.id, "Nxt.IsPaired("+p1 )=="true"; } 
    obj.IsConnected = function() { return prompt( obj.id, "Nxt.IsConnected(" )=="true"; }  
    obj.IsMotorIdle = function( p1 ) { return prompt( obj.id, "Nxt.IsMotorIdle("+p1 )=="true"; } 
	obj.Beep = function( p1,p2 ) { prompt( obj.id, "Nxt.Beep("+p1+"\f"+p2 ); }
	obj.SetInvert = function( p1 ) { prompt( obj.id, "Nxt.SetInvert("+p1 ); }
	obj.Drive = function( p1,p2,p3,p4 ) { prompt( obj.id, "Nxt.Drive("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }		
	obj.Brake = function( p1 ) { prompt( obj.id, "Nxt.Brake("+p1 ); }
	obj.Stop = function( p1 ) { prompt( obj.id, "Nxt.Stop("+p1 ); }
	obj.SendMail = function( p1,p2,p3 ) { prompt( obj.id, "Nxt.SendMail("+p1+"\f"+p2+"\f"+p3 ); }
	obj.ReadMail = function( p1,p2,p3 ) { var ret = prompt( obj.id, "Nxt.ReadMail("+p1+"\f"+p2+"\f"+p3 );  if(p2.toLowerCase()=="number") return parseFloat(ret); else if(p2.toLowerCase()=="logic") return (ret=="true"); else return ret; }
	obj.SetLampColor = function( p1,p2 ) { prompt( obj.id, "Nxt.SetLampColor("+p1+"\f"+p2 ); }	
	obj.PlaySoundFile = function( p1,p2 ) { prompt( obj.id, "Nxt.PlaySoundFile("+p1+"\f"+p2 ); }
	obj.ReadSoundSensor = function( p1,p2 ) { return parseInt(prompt( obj.id, "Nxt.ReadSoundSensor("+p1+"\f"+p2 )); }
	obj.ReadColorSensor = function( p1,p2 ) { return parseInt(prompt( obj.id, "Nxt.ReadColorSensor("+p1+"\f"+p2 )); }
	obj.ToColorName = function( p1 ) { return prompt( obj.id, "Nxt.ToColorName("+p1 ); } 	
	obj.ReadLightSensor = function( p1,p2 ) { return parseInt(prompt( obj.id, "Nxt.ReadLightSensor("+p1+"\f"+p2 )); }	
	obj.ReadTouchSensor = function( p1 ) { return prompt( obj.id, "Nxt.ReadTouchSensor("+p1 )=="1"; }		
	obj.ReadDistanceSensor = function( p1 ) { return parseInt(prompt( obj.id, "Nxt.ReadDistanceSensor("+p1 )); }			
	obj.GetCurrentProgram = function() { return prompt( obj.id, "Nxt.GetCurrentProgram(" ); }
	obj.StartProgram = function( p1 ) { prompt( obj.id, "Nxt.StartProgram("+p1 ); }
	obj.StopProgram = function() { prompt( obj.id, "Nxt.StopProgram(" ); }
	obj.FileFindFirst = function( p1 ) { if( _inf ) _inf.Release(); var ret = prompt( obj.id, "Nxt.FileFindFirst("+p1 ); if( ret ) _inf = new Inf(ret); else _inf = null; return _inf; }
	obj.FileFindNext = function( p1 ) { if( _inf ) _inf.Release(); var ret = prompt( obj.id, "Nxt.FileFindNext("+p1 ); if( ret ) _inf = new Inf(ret); else _inf = null; return _inf; }
	
	//Helper functions.
	obj.ShowDevices = function() { nxtHelp.nxt_ShowDevices(); }
	obj.CheckConnection = function() { return nxtHelp.nxt_CheckConnection(); }
	obj.SetOnConnected = function( p1 ) { nxtHelp.nxt_OnConnected = p1; }
	obj.GetBtName = function( p1 ) { return nxtHelp.nxtName; }
	obj.GetBtAddress = function( p1 ) { return nxtHelp.nxtAddress; }
	return obj;
}


function Bts( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "BluetoothSerial"; } 
    obj.Connect = function( name,channel ) { return prompt( obj.id, "Bts.Connect("+name+"\f"+channel )=="true"; }
    obj.SetOnConnect = function( p1 ) { prompt( obj.id, "Bts.SetOnConnect("+p1.name ); }
    obj.Disconnect = function() { prompt( obj.id, "Bts.Disconnect(" ); }
	obj.IsBluetoothEnabled = function() { return prompt( obj.id, "Bts.IsEnabled(" )=="true"; } 
	obj.RequestEnable = function() { prompt( obj.id, "Bts.RequestEnable(" ); }
	obj.IsPaired = function( p1 ) { return prompt( obj.id, "Bts.IsPaired("+p1 )=="true"; } 
    obj.IsConnected = function() { return prompt( obj.id, "Bts.IsConnected(" )=="true"; }  
    obj.Write = function( p1 ) { prompt( obj.id, "Bts.Write("+p1 ); }
    obj.SetOnReceive = function( p1 ) { prompt( obj.id, "Bts.SetOnReceive("+p1.name ); }   
    obj.SetSplitMode = function( p1,p2,p3 ) { prompt( obj.id, "Bts.SetSplitMode("+p1+"\f"+p2+"\f"+p3 ); } 
    obj.SetTimeout = function( p1 ) { prompt( obj.id, "Bts.SetTimeout("+p1 ); } 
    obj.Clear = function() { prompt( obj.id, "Bts.Clear("); }
	return obj;
}

function Zip( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "ZipUtil"; }
    obj.Open = function( file ) { prompt( obj.id, "Zip.Open(\f"+file ); }   
    obj.Create = function( file ) { prompt( obj.id, "Zip.Create(\f"+file ); } 
    obj.Close = function() { prompt( obj.id, "Zip.Close(" ); } 
    obj.List = function( path ) { return prompt( obj.id, "Zip.List(\f"+path ); }  
    obj.Extract = function( name,file ) { prompt( obj.id, "Zip.Extract(\f"+name+"\f"+file ); } 
    obj.AddFile = function( name,file ) { prompt( obj.id, "Zip.AddFile(\f"+name+"\f"+file ); }  
    obj.AddText = function( name,text ) { prompt( obj.id, "Zip.AddText(\f"+name+"\f"+text ); } 
    obj.CreateKey = function( file,pass,name,org ) { prompt( obj.id, "Zip.CreateKey(\f"+file+"\f"+pass+"\f"+name+"\f"+org ); }
    obj.CreateDebugKey = function( file ) { prompt( obj.id, "Zip.CreateDebugKey(\f"+file ); }
    obj.Sign = function( fileIn,fileOut,keyStore,pass ) { return prompt( obj.id, "Zip.Sign(\f"+fileIn+"\f"+fileOut+"\f"+keyStore+"\f"+pass )=="true"; } 
    obj.UpdateManifest = function( fileIn, fileOut, packageName, appName, permissions, options ) { prompt( obj.id, "Zip.UpdateManifest(\f"+fileIn+"\f"+fileOut+"\f"+packageName+"\f"+appName+"\f"+permissions+"\f"+options ); } 
	return obj;
}


function Not( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "Notification"; }
    obj.SetMessage = function( ticker,title,text ) { prompt( obj.id, "Not.SetMessage(\f"+ticker+"\f"+title+"\f"+text ); }
    obj.Notify = function() { prompt( obj.id, "Not.Notify(" ); }   
    obj.Cancel = function() { prompt( obj.id, "Not.Cancel(" ); }  
    obj.SetLargeImage = function( file ) { prompt( obj.id, "Not.SetLargeImage(\f"+file ); }  
    obj.SetLights = function( color,onMs,offMs ) { prompt( obj.id, "Not.SetLights(\f"+color+"\f"+onMs+"\f"+offMs ); } 
    return obj;
}

function Crp( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "Crypt"; }
    obj.Hash = function( text,mode ) { return prompt( obj.id, "Crp.Hash\f"+text+"\f"+mode ); }
    obj.Encrypt = function( text,password ) { return prompt( obj.id, "Crp.Encrypt\f"+text+"\f"+password ); }   
    obj.Decrypt = function( text,password ) { return prompt( obj.id, "Crp.Decrypt\f"+text+"\f"+password ); } 
   	return obj;
}

function Inf( id )
{
	var obj = new Obj( id ); 
	obj.GetType = function() { return "NxtInfo"; }
	obj.GetName = function() { return prompt( obj.id, "Inf.GetName(" ); }
	obj.GetHandle = function() { return parseInt( prompt( obj.id, "Inf.GetHandle(" )); }
	obj.GetSize = function() { return parseInt( prompt( obj.id, "Inf.GetSize(" )); }
	return obj;
}

function IOIO( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "IOIO"; }
    obj.Release = function() { prompt( obj.id, "IOI.Release(" ); }
    obj.IsConnected = function() { return prompt( obj.id, "IOI.IsConnected(")=="true"; }
    obj.CheckConnection = function() { prompt( obj.id, "IOI.CheckConnection("); }
    obj.SetOnConnect = function( p1 ) { prompt( obj.id, "IOI.SetOnConnect("+p1.name ); }
    obj.SetOnError = function( p1 ) { prompt( obj.id, "IOI.SetOnError("+p1.name ); }
	obj.CreateDigitalOutput = function( p1,p2,p3 ) { var ret = prompt( obj.id, "IOI.CreateDigitalOutput("+p1+"\f"+p2+"\f"+p3 ); if( ret ) return new IDO(ret); else return null; }	
	obj.CreateDigitalInput = function( p1,p2 ) { var ret = prompt( obj.id, "IOI.CreateDigitalInput("+p1+"\f"+p2 ); if( ret ) return new IDI(ret); else return null; }	
	obj.CreatePwmOutput = function( p1,p2,p3 ) { var ret = prompt( obj.id, "IOI.CreatePwmOutput("+p1+"\f"+p2+"\f"+p3 ); if( ret ) return new IPW(ret); else return null; }	
	obj.CreateAnalogInput = function( p1 ) { var ret = prompt( obj.id, "IOI.CreateAnalogInput("+p1 ); if( ret ) return new IAI(ret); else return null; }	
	obj.CreateUart = function( p1,p2,p3,p4,p5,p6 ) { var ret = prompt( obj.id, "IOI.CreateUart("+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6 ); if( ret ) return new IUA(ret); else return null; }	
	obj.CreatePulseInput = function( p1,p2,p3 ) { var ret = prompt( obj.id, "IOI.CreatePulseInput("+p1+"\f"+p2+"\f"+p3 ); if( ret ) return new IPI(ret); else return null; }	
	return obj;
}

function SMS( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "SMS"; }
	obj.Send = function( p1,p2 ) { prompt( obj.id, "SMS.Send("+p1+"\f"+p2 ); }	
	obj.SetOnStatus = function( p1 ) { prompt( obj.id, "SMS.SetOnStatus("+p1.name ); }
	obj.SetOnMessage = function( p1 ) { prompt( obj.id, "SMS.SetOnMessage("+p1.name ); }
	return obj;
}

function SMW( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "SmartWatch"; }
    obj.GetVersion = function() { return parseFloat( prompt( obj.id, "SMW.GetVersion(" )); }
	obj.ShowLayout = function( lay,x,y ) { prompt( obj.id, "SMW.ShowLayout("+(lay?lay.id:null)+"\f"+x+"\f"+y ); }	
	obj.Vibrate = function( p1,p2,p3 ) { prompt( obj.id, "SMW.Vibrate("+p1+"\f"+p2+"\f"+p3 ); }	
	obj.ShowMessage = function( p1 ) { prompt( obj.id, "SMW.ShowMessage("+p1 ); }	
	obj.SetScreenState = function( p1 ) { prompt( obj.id, "SMW.SetScreenState("+p1 ); }
	obj.SetMenu = function( p1,p2 ) { prompt( obj.id, "SMW.SetMenu("+p1+"\f"+p2 ); }	
	obj.StopApp = function() { prompt( obj.id, "SMW.StopApp(" ); }
	obj.SetOnStart = function( p1 ) { prompt( obj.id, "SMW.SetOnStart("+p1.name ); }
	obj.SetOnStop = function( p1 ) { prompt( obj.id, "SMW.SetOnStop("+p1.name ); }
	obj.SetOnShow = function( p1 ) { prompt( obj.id, "SMW.SetOnShow("+p1.name ); }
	obj.SetOnHide = function( p1 ) { prompt( obj.id, "SMW.SetOnHide("+p1.name ); }
	obj.SetOnTouch = function( p1 ) { prompt( obj.id, "SMW.SetOnTouch("+p1.name ); }
	obj.SetOnSwipe = function( p1 ) { prompt( obj.id, "SMW.SetOnSwipe("+p1.name ); }
	obj.SetOnBack = function( p1 ) { prompt( obj.id, "SMW.SetOnBack("+p1.name ); }
	obj.SetOnMenu = function( p1 ) { prompt( obj.id, "SMW.SetOnMenu("+p1.name ); }
	obj.CreateLayout = function( p1,p2 ) { var ret = prompt( obj.id, "SMW.CreateLayout("+p1+"\f"+p2 ); if( ret ) return new Swl(ret); else return null; }	
	obj.AddLayout = function( p1 ) { prompt( obj.id, "SMW.AddLayout("+ p1.id ); }	
	obj.RemoveLayout = function( p1 ) { prompt( obj.id, "SMW.RemoveLayout("+ p1.id ); }	
	obj.CreateText = function( p1,p2,p3,p4 ) { var ret = prompt( obj.id, "SMW.CreateText("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); if( ret ) return new Swt(ret); else return null; }
	obj.CreateImage = function( p1,p2,p3,p4,p5,p6 ) { var ret = prompt( obj.id, "SMW.CreateImage("+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6 );  if( ret ) return new Swi(ret); else return null; }	
	obj.CreateSensor = function( p1,p2 ) { var ret = prompt( obj.id, "SMW.CreateSensor("+p1+"\f"+p2 ); if( ret ) return new Sws(ret); else return null; }
	return obj;
}

function Swo( id )
{
	this.id = id;    
    this.Release = function() { prompt( this.id, "Obj.Release(" ); }        
    this.SetVisibility = function( p1 ) { prompt( this.id, "Obj.SetVisibility("+p1 ); }    
    this.GetVisibility = function() { return prompt( this.id, "Obj.GetVisibility(" ); }   
    this.SetPadding = function( p1,p2,p3,p4 ) { prompt( this.id, "Swo.SetPadding("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    this.SetMargins = function( p1,p2,p3,p4 ) { prompt( this.id, "Swo.SetMargins("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    this.SetBackground = function( p1,p2 ) { prompt( this.id, "Obj.SetBackground("+p1+"\f"+p2 ); }
    this.SetBackColor = function( p1 ) { prompt( this.id, "Obj.SetBackColor("+p1 ); }  
    this.SetBackGradient = function( p1,p2,p3,p4,p5,p6,p7 ) { prompt( this.id, "Obj.SetBackGradient(Linear\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6+"\f"+p7 ); }  
    this.SetBackGradientRadial = function( p1,p2,p3,p4,p5,p6,p7 ) { prompt( this.id, "Obj.SetBackGradient(Radial\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6+"\f"+p7 ); }  
    this.SetPosition = function( p1,p2,p3,p4 ) { prompt( this.id, "Obj.SetPosition("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    this.SetSize = function( p1,p2 ) { prompt( this.id, "Obj.SetSize("+p1+"\f"+p2 ); }
    this.GetWidth = function() { return prompt( this.id, "Obj.GetWidth(" ); }  
    this.GetHeight = function() { return prompt( this.id, "Obj.GetHeight(" ); }    
}

function Swl( id )
{
	var obj = new Swo( id );
	obj.GetType = function() { return "SmartWatchLayout"; }
    obj.SetOrientation = function( p1 ) { prompt( this.id, "Swl.SetOrientation("+p1 ); }    
    obj.AddChild = function( p1 ) { prompt( this.id, "Swl.AddChild("+p1.id ); }
    obj.RemoveChild = function( p1 ) { prompt( this.id, "Swl.RemoveChild("+p1.id ); }        
    return obj;
}

function Swt( id )
{
    var obj = new Swo( id );  
    obj.GetType = function() { return "SmartWatchText"; }
    obj.SetText = function( p1 ) { prompt( obj.id, "Swt.SetText("+p1 ); }  
    obj.SetHtml = function( p1 ) { prompt( obj.id, "Swt.SetHtml("+p1 ); }  
    obj.GetText = function() { return prompt( obj.id, "Swt.GetText(" ); }  
    obj.SetTextColor = function( p1 ) { prompt( obj.id, "Swt.SetTextColor("+p1 ); }    
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Swt.SetTextSize("+p1 ); }    
    obj.GetLineCount = function() { return parseInt(prompt( obj.id, "Swt.GetLineCount(")); }   
    obj.GetMaxLines = function() { return parseInt(prompt( obj.id, "Swt.GetMaxLines(")); }   
    obj.GetLineTop = function( p1 ) { return parseFloat(prompt( obj.id, "Swt.GetLineTop("+p1 )); }   
    obj.GetLineStart = function( p1 ) { return parseInt(prompt( obj.id, "Swt.GetLineStart("+p1 )); }      
    return obj;
}

function Swi( id )
{
    var obj = new Swo( id ); 
    obj.GetType = function() { return "SmartWatchImage"; }
    obj.SetAlpha = function( p1 ) { prompt( obj.id, "Swi.SetAlpha("+p1 ); }
    obj.SetImage = function( image,width,height ) { 
		if( typeof image=="string" ) prompt( obj.id, "Swi.LoadImage(\f"+image+"\f"+width+"\f"+height ); 
		else prompt( obj.id, "Swi.CopyImage(\f"+(image?image.id:null)+"\f"+width+"\f"+height ); 
	}
    obj.GetImgHeight = function() { return parseFloat(prompt( obj.id, "Swi.GetImgHeight(" )); }
    obj.SetOnTouch = function( p1 ) { prompt( obj.id, "Swi.SetOnTouch("+p1.name ); }    
    obj.SetTouchable = function( p1 ) { prompt( obj.id, "Swi.SetTouchable("+p1 ); }
    obj.DrawPoint = function( p1,p2 ) { prompt( obj.id, "Swi.DrawPoint("+p1+"\f"+p2 ); }
    obj.DrawCircle = function( p1,p2,p3 ) { prompt( obj.id, "Swi.DrawCircle("+p1+"\f"+p2+"\f"+p3 ); }
    obj.DrawArc = function( p1,p2,p3,p4,p5,p6 ) { prompt( obj.id, "Swi.DrawArc("+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6 ); }
    obj.DrawLine = function( p1,p2,p3,p4 ) { prompt( obj.id, "Swi.DrawLine("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    obj.DrawRectangle = function( p1,p2,p3,p4 ) { prompt( obj.id, "Swi.DrawRect("+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    obj.DrawText = function( p1,p2,p3 ) { prompt( obj.id, "Swi.DrawText("+p1+"\f"+p2+"\f"+p3 ); }
    obj.SetColor = function( p1 ) { prompt( obj.id, "Swi.SetColor("+p1 ); }  
    obj.SetTextSize = function( p1 ) { prompt( obj.id, "Swi.SetTextSize("+p1 ); }  
    obj.SetLineWidth = function( p1 ) { prompt( obj.id, "Swi.SetLineWidth("+p1 ); }  
    obj.SetPaintColor = function( p1 ) { prompt( obj.id, "Swi.SetPaintColor("+p1 ); }  
    obj.SetPaintStyle = function( p1 ) { prompt( obj.id, "Swi.SetPaintStyle("+p1 ); }  
    obj.Rotate = function( p1,p2,p3 ) { prompt( obj.id, "Swi.Rotate("+p1+"\f"+p2+"\f"+p3 ); }
    obj.Move = function( p1,p2 ) { prompt( obj.id, "Swi.Move("+p1+"\f"+p2 ); }
    obj.Scale = function( p1,p2 ) { prompt( obj.id, "Swi.Scale("+p1+"\f"+p2 ); }
    obj.SetName = function( p1 ) { prompt( obj.id, "Swi.SetName("+p1 ); }
    return obj;
}

function Sws( id )
{
    var obj = new Swo( id );  
    obj.GetType = function() { return "SmartWatchSensor"; }  
    obj.SetOnChange = function( p1 ) { prompt( obj.id, "Sws.SetOnChange("+p1.name ); } 
    obj.SetMaxRate = function( p1 ) { prompt( obj.id, "Sws.SetMaxRate("+p1 ); } 
    obj.Start = function() { prompt( obj.id, "Sws.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Sws.Stop(" ); }
    obj.Calibrate = function( p1 ) { prompt( obj.id, "Sws.Calibrate("+p1 ); }
    obj.IsCalibrated = function() { return prompt( "@", "Sws.IsCalibrated(" )=="true"; }	
    return obj;
}

function EMAIL( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "Email"; }
    obj.SetSMTP = function( p1,p2 ) { prompt( obj.id, "EML.SetSMTP("+p1+"\f"+p2 ); }
    obj.SetIMAP = function( p1,p2 ) { prompt( obj.id, "EML.SetIMAP("+p1+"\f"+p2 ); }
	obj.Send = function( subject,body,sender,recipients,attach ) { prompt( obj.id, "EML.Send(\f"+subject+"\f"+body+"\f"+sender+"\f"+recipients+"\f"+attach ); }
	obj.Receive = function( p1,p2,p3 ) { prompt( obj.id, "EML.Receive("+p1+"\f"+p2+"\f"+p3 ); }	
	obj.SetOnStatus = function( p1 ) { prompt( obj.id, "EML.SetOnStatus("+p1.name ); }
	obj.SetOnMessage = function( p1 ) { prompt( obj.id, "EML.SetOnMessage("+p1.name ); }
	return obj;
}

function IPI( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "IOIOPulseInput"; }
    obj.GetType = function() { return "Layout"; }  
    obj.Close = function() { prompt( obj.id, "IPI.Close("); }
    obj.GetDuration = function(p1) { return parseFloat(prompt( obj.id, "IPI.GetDuration("+p1 )); }
    obj.GetFrequency = function(p1) { return parseFloat(prompt( obj.id, "IPI.GetFrequency("+p1 )); }  
    return obj;
}

function IUA( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "IOIOUart"; }   
    obj.Close = function() { prompt( obj.id, "IUA.Close("); }
    obj.Write = function( p1 ) { prompt( obj.id, "IUA.Write("+p1 ); }
    obj.SetOnReceive = function( p1 ) { prompt( obj.id, "IUA.SetOnReceive("+p1.name ); }   
    obj.SetSplitMode = function( p1,p2,p3 ) { prompt( obj.id, "IUA.SetSplitMode("+p1+"\f"+p2+"\f"+p3 ); } 
    obj.SetTimeout = function( p1 ) { prompt( obj.id, "IUA.SetTimeout("+p1 ); } 
    obj.Clear = function() { prompt( obj.id, "IUA.Clear("); }
    return obj;
}

function IDO( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "IOIODigitalOutput"; }
    obj.Close = function() { prompt( obj.id, "IDO.Close("); }
    obj.Write = function( p1 ) { prompt( obj.id, "IDO.Write("+p1 ); }
    return obj;
}

function IDI( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "IOIODigitalInput"; }
    obj.Close = function() { prompt( obj.id, "IDI.Close("); }
    obj.Read = function() { return prompt( obj.id, "IDI.Read(" )=="true"; }
    obj.WatchForValue = function( p1 ) { prompt( obj.id, "IDI.WatchForValue("+p1 ); } 
    obj.SetOnValue = function( p1 ) { prompt( obj.id, "IDI.SetOnValue("+p1.name ); }   
    return obj;
}

function IPW( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "IOIOPwmOutput"; } 
    obj.Close = function() { prompt( obj.id, "IPW.Close("); }
    obj.SetPulseWidth = function( p1 ) { prompt( obj.id, "IPW.SetPulseWidth("+p1 ); }
    obj.SetDutyCycle = function( p1 ) { prompt( obj.id, "IPW.SetDutyCycle("+p1 ); }
    return obj;
}

function IAI( id )
{
    var obj = new Obj( id );    
    obj.GetType = function() { return "IOIOAnalogInput"; }
    obj.Close = function() { prompt( obj.id, "IAI.Close(" ); }
    obj.Read = function() { return parseFloat(prompt( obj.id, "IAI.Read(" )); }
    obj.GetReference = function() { return parseFloat(prompt( obj.id, "IAI.GetReference(" )); }
    obj.GetVoltage = function() { return parseFloat(prompt( obj.id, "IAI.GetVoltage(" )); }
    return obj;
}

function Wbs( id )
{
	var obj = new Obj( id );
	obj.GetType = function() { return "WebServer"; }
	obj.SetFolder = function( folder ) { prompt( this.id, "Wbs.SetFolder(\f"+folder ); }
    obj.Start = function() { prompt( this.id, "Wbs.Start(" ); }
    obj.SetResponse = function( p1 ) { prompt( this.id, "Wbs.SetResponse("+p1 ); }
    obj.AddServlet = function( p1,p2 ) { prompt( this.id, "Wbs.AddServlet("+p1+"\f"+p2.name ); }
    obj.SendText = function( txt ) { prompt( this.id, "Wbs.SendText(\f"+txt ); }
    return obj;
}

function Usb( id )
{
	var obj = new Obj( id );
	obj.GetType = function() { return "USBSerial"; }
    obj.Start = function() { prompt( obj.id, "Usb.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Usb.Stop(" ); }
    obj.Write = function( p1 ) { prompt( obj.id, "Usb.Write("+p1 ); }
    obj.SetOnReceive = function( p1 ) { prompt( obj.id, "Usb.SetOnReceive("+p1.name ); }       
    return obj;
}

function Plg( id )
{
	var obj = new Obj( id );
	obj.GetType = function() { return "Plugin"; }
    obj.Send = function( cmd,p1,p2,p3,p4,p5,p6,p7 ) { 
		return prompt( obj.id, "Plg.Send\f"+cmd+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7 ); 
	}
	obj.SendImg = function( cmd,img,width,height ) { prompt( obj.id, "Plg.SendImg\f"+cmd+"\f"+(img?img.id:null)+"\f"+width+"\f"+height ); }
    return obj;
}

function Svc( id )
{
	var obj = new Obj( id );
	obj.GetType = function() { return "Service"; }
    obj.Send = function( cmd,p1,p2,p3,p4,p5,p6,p7 ) { 
		prompt( obj.id, "Svc.Send\f"+cmd+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7 ); 
	}
	obj.SendImg = function( cmd,img ) { prompt( obj.id, "Svc.SendImg\f"+cmd+"\f"+(img?img.id:null) ); }
    return obj;
}

function Syn( id )
{
	var obj = new Obj( id );
	obj.GetType = function() { return "Synth"; }
    obj.Start = function() { prompt( this.id, "Syn.Start(" ); }
    obj.Stop = function() { prompt( this.id, "Syn.Stop(" ); }
    obj.PlayTone = function( p1,p2) { prompt( this.id, "Syn.PlayTone("+p1+"\f"+p2 ); }
    obj.PlayNote = function( p1) { prompt( this.id, "Syn.PlayNote("+p1 ); }
    obj.PlayMidiTune = function( p1) { prompt( this.id, "Syn.PlayMidiTune("+p1 ); }
    obj.SetFrequency = function( p1 ) { prompt( this.id, "Syn.SetFrequency("+p1 ); }
    obj.SetWaveShape = function( p1 ) { prompt( this.id, "Syn.SetWaveShape("+p1 ); }
    obj.SetVolume = function( p1,p2 ) { prompt( this.id, "Syn.SetVolume("+p1+"\f"+p2 ); }
    obj.SetNoteLength = function( dur ) { prompt( this.id, "Syn.SetNoteLength("+dur ); }
    
    obj.SetVca = function( p1,p2,p3,p4 ) { prompt( this.id, "Syn.SetVca\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    obj.SetVcaAttack = function( p1 ) { prompt( this.id, "Syn.SetVcaAttack("+p1 ); }
    obj.SetVcaDecay = function( p1 ) { prompt( this.id, "Syn.SetVcaDecay("+p1 ); }
    obj.SetVcaSustain = function( p1 ) { prompt( this.id, "Syn.SetVcaSustain("+p1 ); }
    obj.SetVcaRelease = function( p1 ) { prompt( this.id, "Syn.SetVcaRelease("+p1 ); }
    obj.SetVcaEnabled = function( p1 ) { prompt( this.id, "Syn.SetVcaEnabled("+p1 ); }
    
    obj.SetVcf = function( p1,p2,p3,p4,p5,p6,p7 ) { prompt( this.id, "Syn.SetVcf\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4+"\f"+p5+"\f"+p6+"\f"+p7 ); }
    obj.SetVcfAttack = function( p1 ) { prompt( this.id, "Syn.SetVcfAttack("+p1 ); }
    obj.SetVcfDecay = function( p1 ) { prompt( this.id, "Syn.SetVcfDecay("+p1 ); }
    obj.SetVcfSustain = function( p1 ) { prompt( this.id, "Syn.SetVcfSustain("+p1 ); }
    obj.SetVcfRelease = function( p1 ) { prompt( this.id, "Syn.SetVcfRelease("+p1 ); }
    obj.SetVcfCutoff = function( p1 ) { prompt( this.id, "Syn.SetVcfCutoff("+p1 ); }
    obj.SetVcfResonance = function( p1 ) { prompt( this.id, "Syn.SetVcfResonance("+p1 ); }
    obj.SetVcfDepth = function( p1 ) { prompt( this.id, "Syn.SetVcfDepth("+p1 ); }
    obj.SetVcfEnabled = function( p1 ) { prompt( this.id, "Syn.SetVcfEnabled("+p1 ); }
    
    obj.SetPhaser = function( p1,p2,p3,p4 ) { prompt( this.id, "Syn.SetPhaser\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    obj.SetPhaserDryWet = function( p1 ) { prompt( this.id, "Syn.SetPhaserDryWet("+p1 ); }
    obj.SetPhaserRate = function( p1 ) { prompt( this.id, "Syn.SetPhaserRate("+p1 ); }
    obj.SetPhaserRange = function( p1 ) { prompt( this.id, "Syn.SetPhaserRange("+p1 ); }
    obj.SetPhaserFeedback = function( p1 ) { prompt( this.id, "Syn.SetPhaserFeedback("+p1 ); }
    obj.SetPhaserEnabled = function( p1 ) { prompt( this.id, "Syn.SetPhaserEnabled("+p1 ); }
    
    obj.SetDelay = function( p1 ) { prompt( this.id, "Syn.SetDelay("+p1 ); }
    obj.SetFeedback = function( p1 ) { prompt( this.id, "Syn.SetFeedback("+p1 ); }
    obj.SetDelayEnabled = function( p1 ) { prompt( this.id, "Syn.SetDelayEnabled("+p1 ); }
    return obj;
}

function _Call( id, func, params ) { 
	func.apply( _map[id], params );
}

function _Cb( obj, func ) {
    return new _ObjCb(obj, func);
}

function _ObjCb( obj, func ) {
    _cbMap[++_cbId] = obj; 
    this.name = "_cbMap['"+_cbId+"']."+func;
}

function _LoadScript( url, callback )
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    head.appendChild(script);
}

function _LoadPlugin( name )
{
    if( !name ) return;
    name = name.substr( name.lastIndexOf("/")+1 );
    _LoadScript( "../Plugins/"+name+"/"+name+".inc" );
}

function _CreatePlugin( name, options ) 
{ 
	var ret = prompt( "@", "App.CreatePlugin("+name+"\f"+options ); 
	if( ret ) return new Plg(ret); 
	else throw "Failed to create plugin:" + name; 
}	

function _Run(s) 
{ 
	if( noConsole  ) {
		try { eval(s); } 
		catch(e) { 
			var msg = e.toString();
			if( msg.indexOf("OnStart is not defined") > -1 ) msg = "Syntax Error!";
			app.Alert(msg,"Script Error"); 
		}
	} else eval(s);
}

function OnCreate(extract,debug) 
{       
	if( extract ) app._Extract( true );
	else if(typeof OnStart=='function') { OnStart(); prompt("@","_Start"); }
	if( debug ) app.CreateDebug();
}

app = new App();

if( navigator.userAgent.indexOf("Android") > -1 )
	noConsole = ( app.GetModel().indexOf("HTC") > -1 && app.GetBuildNum() <= 10 ); 

