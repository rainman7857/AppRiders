'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomOut = exports.ZoomIn = exports.Zap = exports.ZapOff = exports.Youtube = exports.X = exports.XSquare = exports.XCircle = exports.Wind = exports.Wifi = exports.WifiOff = exports.Watch = exports.Volume = exports.VolumeX = exports.Volume2 = exports.Volume1 = exports.Voicemail = exports.Video = exports.VideoOff = exports.Users = exports.User = exports.UserX = exports.UserPlus = exports.UserMinus = exports.UserCheck = exports.Upload = exports.UploadCloud = exports.Unlock = exports.Underline = exports.Umbrella = exports.Type = exports.Twitter = exports.Tv = exports.Truck = exports.Triangle = exports.TrendingUp = exports.TrendingDown = exports.Trello = exports.Trash = exports.Trash2 = exports.ToggleRight = exports.ToggleLeft = exports.ThumbsUp = exports.ThumbsDown = exports.Thermometer = exports.Terminal = exports.Target = exports.Tag = exports.Tablet = exports.Sunset = exports.Sunrise = exports.Sun = exports.StopCircle = exports.Star = exports.Square = exports.Speaker = exports.Smile = exports.Smartphone = exports.Sliders = exports.Slash = exports.Slack = exports.SkipForward = exports.SkipBack = exports.Sidebar = exports.Shuffle = exports.ShoppingCart = exports.ShoppingBag = exports.Shield = exports.ShieldOff = exports.Share = exports.Share2 = exports.Settings = undefined;
exports.Server = exports.Send = exports.Search = exports.Scissors = exports.Save = exports.Rss = exports.RotateCw = exports.RotateCcw = exports.Rewind = exports.Repeat = exports.RefreshCw = exports.RefreshCcw = exports.Radio = exports.Printer = exports.Power = exports.Pocket = exports.Plus = exports.PlusSquare = exports.PlusCircle = exports.Play = exports.PlayCircle = exports.PieChart = exports.Phone = exports.PhoneOutgoing = exports.PhoneOff = exports.PhoneMissed = exports.PhoneIncoming = exports.PhoneForwarded = exports.PhoneCall = exports.Percent = exports.Pause = exports.PauseCircle = exports.Paperclip = exports.Package = exports.Octagon = exports.Navigation = exports.Navigation2 = exports.Music = exports.Move = exports.MoreVertical = exports.MoreHorizontal = exports.Moon = exports.Monitor = exports.Minus = exports.MinusSquare = exports.MinusCircle = exports.Minimize = exports.Minimize2 = exports.Mic = exports.MicOff = exports.MessageSquare = exports.MessageCircle = exports.Menu = exports.Meh = exports.Maximize = exports.Maximize2 = exports.Map = exports.MapPin = exports.Mail = exports.LogOut = exports.LogIn = exports.Lock = exports.Loader = exports.List = exports.Linkedin = exports.Link = exports.Link2 = exports.LifeBuoy = exports.Layout = exports.Layers = exports.Key = exports.Italic = exports.Instagram = exports.Info = exports.Inbox = exports.Image = exports.Home = exports.HelpCircle = exports.Heart = exports.Headphones = exports.Hash = exports.HardDrive = exports.Grid = exports.Globe = exports.Gitlab = exports.GitHub = exports.GitPullRequest = exports.GitMerge = exports.GitCommit = exports.GitBranch = exports.Gift = exports.Frown = exports.Folder = exports.FolderPlus = exports.FolderMinus = exports.Flag = exports.Filter = exports.Film = exports.File = exports.FileText = undefined;
exports.FilePlus = exports.FileMinus = exports.Feather = exports.FastForward = exports.Facebook = exports.Eye = exports.EyeOff = exports.ExternalLink = exports.Edit = exports.Edit3 = exports.Edit2 = exports.Droplet = exports.Download = exports.DownloadCloud = exports.DollarSign = exports.Disc = exports.Delete = exports.Database = exports.Crosshair = exports.Crop = exports.CreditCard = exports.Cpu = exports.CornerUpRight = exports.CornerUpLeft = exports.CornerRightUp = exports.CornerRightDown = exports.CornerLeftUp = exports.CornerLeftDown = exports.CornerDownRight = exports.CornerDownLeft = exports.Copy = exports.Compass = exports.Command = exports.Coffee = exports.Codepen = exports.Code = exports.Cloud = exports.CloudSnow = exports.CloudRain = exports.CloudOff = exports.CloudLightning = exports.CloudDrizzle = exports.Clock = exports.Clipboard = exports.Circle = exports.Chrome = exports.ChevronsUp = exports.ChevronsRight = exports.ChevronsLeft = exports.ChevronsDown = exports.ChevronUp = exports.ChevronRight = exports.ChevronLeft = exports.ChevronDown = exports.Check = exports.CheckSquare = exports.CheckCircle = exports.Cast = exports.Camera = exports.CameraOff = exports.Calendar = exports.Briefcase = exports.Box = exports.Bookmark = exports.Book = exports.BookOpen = exports.Bold = exports.Bluetooth = exports.Bell = exports.BellOff = exports.Battery = exports.BatteryCharging = exports.BarChart = exports.BarChart2 = exports.Award = exports.AtSign = exports.ArrowUp = exports.ArrowUpRight = exports.ArrowUpLeft = exports.ArrowUpCircle = exports.ArrowRight = exports.ArrowRightCircle = exports.ArrowLeft = exports.ArrowLeftCircle = exports.ArrowDown = exports.ArrowDownRight = exports.ArrowDownLeft = exports.ArrowDownCircle = exports.Archive = exports.Aperture = exports.Anchor = exports.AlignRight = exports.AlignLeft = exports.AlignJustify = exports.AlignCenter = exports.AlertTriangle = exports.AlertOctagon = exports.AlertCircle = exports.Airplay = exports.Activity = undefined;


var _activity = require('./icons/activity');

var _activity2 = _interopRequireDefault(_activity);

var _airplay = require('./icons/airplay');

var _airplay2 = _interopRequireDefault(_airplay);

var _alertCircle = require('./icons/alert-circle');

var _alertCircle2 = _interopRequireDefault(_alertCircle);

var _alertOctagon = require('./icons/alert-octagon');

var _alertOctagon2 = _interopRequireDefault(_alertOctagon);

var _alertTriangle = require('./icons/alert-triangle');

var _alertTriangle2 = _interopRequireDefault(_alertTriangle);

var _alignCenter = require('./icons/align-center');

var _alignCenter2 = _interopRequireDefault(_alignCenter);

var _alignJustify = require('./icons/align-justify');

var _alignJustify2 = _interopRequireDefault(_alignJustify);

var _alignLeft = require('./icons/align-left');

var _alignLeft2 = _interopRequireDefault(_alignLeft);

var _alignRight = require('./icons/align-right');

var _alignRight2 = _interopRequireDefault(_alignRight);

var _anchor = require('./icons/anchor');

var _anchor2 = _interopRequireDefault(_anchor);

var _aperture = require('./icons/aperture');

var _aperture2 = _interopRequireDefault(_aperture);

var _archive = require('./icons/archive');

var _archive2 = _interopRequireDefault(_archive);

var _arrowDownCircle = require('./icons/arrow-down-circle');

var _arrowDownCircle2 = _interopRequireDefault(_arrowDownCircle);

var _arrowDownLeft = require('./icons/arrow-down-left');

var _arrowDownLeft2 = _interopRequireDefault(_arrowDownLeft);

var _arrowDownRight = require('./icons/arrow-down-right');

var _arrowDownRight2 = _interopRequireDefault(_arrowDownRight);

var _arrowDown = require('./icons/arrow-down');

var _arrowDown2 = _interopRequireDefault(_arrowDown);

var _arrowLeftCircle = require('./icons/arrow-left-circle');

var _arrowLeftCircle2 = _interopRequireDefault(_arrowLeftCircle);

var _arrowLeft = require('./icons/arrow-left');

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

var _arrowRightCircle = require('./icons/arrow-right-circle');

var _arrowRightCircle2 = _interopRequireDefault(_arrowRightCircle);

var _arrowRight = require('./icons/arrow-right');

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _arrowUpCircle = require('./icons/arrow-up-circle');

var _arrowUpCircle2 = _interopRequireDefault(_arrowUpCircle);

var _arrowUpLeft = require('./icons/arrow-up-left');

var _arrowUpLeft2 = _interopRequireDefault(_arrowUpLeft);

var _arrowUpRight = require('./icons/arrow-up-right');

var _arrowUpRight2 = _interopRequireDefault(_arrowUpRight);

var _arrowUp = require('./icons/arrow-up');

var _arrowUp2 = _interopRequireDefault(_arrowUp);

var _atSign = require('./icons/at-sign');

var _atSign2 = _interopRequireDefault(_atSign);

var _award = require('./icons/award');

var _award2 = _interopRequireDefault(_award);

var _barChart = require('./icons/bar-chart-2');

var _barChart2 = _interopRequireDefault(_barChart);

var _barChart3 = require('./icons/bar-chart');

var _barChart4 = _interopRequireDefault(_barChart3);

var _batteryCharging = require('./icons/battery-charging');

var _batteryCharging2 = _interopRequireDefault(_batteryCharging);

var _battery = require('./icons/battery');

var _battery2 = _interopRequireDefault(_battery);

var _bellOff = require('./icons/bell-off');

var _bellOff2 = _interopRequireDefault(_bellOff);

var _bell = require('./icons/bell');

var _bell2 = _interopRequireDefault(_bell);

var _bluetooth = require('./icons/bluetooth');

var _bluetooth2 = _interopRequireDefault(_bluetooth);

var _bold = require('./icons/bold');

var _bold2 = _interopRequireDefault(_bold);

var _bookOpen = require('./icons/book-open');

var _bookOpen2 = _interopRequireDefault(_bookOpen);

var _book = require('./icons/book');

var _book2 = _interopRequireDefault(_book);

var _bookmark = require('./icons/bookmark');

var _bookmark2 = _interopRequireDefault(_bookmark);

var _box = require('./icons/box');

var _box2 = _interopRequireDefault(_box);

var _briefcase = require('./icons/briefcase');

var _briefcase2 = _interopRequireDefault(_briefcase);

var _calendar = require('./icons/calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _cameraOff = require('./icons/camera-off');

var _cameraOff2 = _interopRequireDefault(_cameraOff);

var _camera = require('./icons/camera');

var _camera2 = _interopRequireDefault(_camera);

var _cast = require('./icons/cast');

var _cast2 = _interopRequireDefault(_cast);

var _checkCircle = require('./icons/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _checkSquare = require('./icons/check-square');

var _checkSquare2 = _interopRequireDefault(_checkSquare);

var _check = require('./icons/check');

var _check2 = _interopRequireDefault(_check);

var _chevronDown = require('./icons/chevron-down');

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronLeft = require('./icons/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('./icons/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _chevronUp = require('./icons/chevron-up');

var _chevronUp2 = _interopRequireDefault(_chevronUp);

var _chevronsDown = require('./icons/chevrons-down');

var _chevronsDown2 = _interopRequireDefault(_chevronsDown);

var _chevronsLeft = require('./icons/chevrons-left');

var _chevronsLeft2 = _interopRequireDefault(_chevronsLeft);

var _chevronsRight = require('./icons/chevrons-right');

var _chevronsRight2 = _interopRequireDefault(_chevronsRight);

var _chevronsUp = require('./icons/chevrons-up');

var _chevronsUp2 = _interopRequireDefault(_chevronsUp);

var _chrome = require('./icons/chrome');

var _chrome2 = _interopRequireDefault(_chrome);

var _circle = require('./icons/circle');

var _circle2 = _interopRequireDefault(_circle);

var _clipboard = require('./icons/clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

var _clock = require('./icons/clock');

var _clock2 = _interopRequireDefault(_clock);

var _cloudDrizzle = require('./icons/cloud-drizzle');

var _cloudDrizzle2 = _interopRequireDefault(_cloudDrizzle);

var _cloudLightning = require('./icons/cloud-lightning');

var _cloudLightning2 = _interopRequireDefault(_cloudLightning);

var _cloudOff = require('./icons/cloud-off');

var _cloudOff2 = _interopRequireDefault(_cloudOff);

var _cloudRain = require('./icons/cloud-rain');

var _cloudRain2 = _interopRequireDefault(_cloudRain);

var _cloudSnow = require('./icons/cloud-snow');

var _cloudSnow2 = _interopRequireDefault(_cloudSnow);

var _cloud = require('./icons/cloud');

var _cloud2 = _interopRequireDefault(_cloud);

var _code = require('./icons/code');

var _code2 = _interopRequireDefault(_code);

var _codepen = require('./icons/codepen');

var _codepen2 = _interopRequireDefault(_codepen);

var _coffee = require('./icons/coffee');

var _coffee2 = _interopRequireDefault(_coffee);

var _command = require('./icons/command');

var _command2 = _interopRequireDefault(_command);

var _compass = require('./icons/compass');

var _compass2 = _interopRequireDefault(_compass);

var _copy = require('./icons/copy');

var _copy2 = _interopRequireDefault(_copy);

var _cornerDownLeft = require('./icons/corner-down-left');

var _cornerDownLeft2 = _interopRequireDefault(_cornerDownLeft);

var _cornerDownRight = require('./icons/corner-down-right');

var _cornerDownRight2 = _interopRequireDefault(_cornerDownRight);

var _cornerLeftDown = require('./icons/corner-left-down');

var _cornerLeftDown2 = _interopRequireDefault(_cornerLeftDown);

var _cornerLeftUp = require('./icons/corner-left-up');

var _cornerLeftUp2 = _interopRequireDefault(_cornerLeftUp);

var _cornerRightDown = require('./icons/corner-right-down');

var _cornerRightDown2 = _interopRequireDefault(_cornerRightDown);

var _cornerRightUp = require('./icons/corner-right-up');

var _cornerRightUp2 = _interopRequireDefault(_cornerRightUp);

var _cornerUpLeft = require('./icons/corner-up-left');

var _cornerUpLeft2 = _interopRequireDefault(_cornerUpLeft);

var _cornerUpRight = require('./icons/corner-up-right');

var _cornerUpRight2 = _interopRequireDefault(_cornerUpRight);

var _cpu = require('./icons/cpu');

var _cpu2 = _interopRequireDefault(_cpu);

var _creditCard = require('./icons/credit-card');

var _creditCard2 = _interopRequireDefault(_creditCard);

var _crop = require('./icons/crop');

var _crop2 = _interopRequireDefault(_crop);

var _crosshair = require('./icons/crosshair');

var _crosshair2 = _interopRequireDefault(_crosshair);

var _database = require('./icons/database');

var _database2 = _interopRequireDefault(_database);

var _delete = require('./icons/delete');

var _delete2 = _interopRequireDefault(_delete);

var _disc = require('./icons/disc');

var _disc2 = _interopRequireDefault(_disc);

var _dollarSign = require('./icons/dollar-sign');

var _dollarSign2 = _interopRequireDefault(_dollarSign);

var _downloadCloud = require('./icons/download-cloud');

var _downloadCloud2 = _interopRequireDefault(_downloadCloud);

var _download = require('./icons/download');

var _download2 = _interopRequireDefault(_download);

var _droplet = require('./icons/droplet');

var _droplet2 = _interopRequireDefault(_droplet);

var _edit = require('./icons/edit-2');

var _edit2 = _interopRequireDefault(_edit);

var _edit3 = require('./icons/edit-3');

var _edit4 = _interopRequireDefault(_edit3);

var _edit5 = require('./icons/edit');

var _edit6 = _interopRequireDefault(_edit5);

var _externalLink = require('./icons/external-link');

var _externalLink2 = _interopRequireDefault(_externalLink);

var _eyeOff = require('./icons/eye-off');

var _eyeOff2 = _interopRequireDefault(_eyeOff);

var _eye = require('./icons/eye');

var _eye2 = _interopRequireDefault(_eye);

var _facebook = require('./icons/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _fastForward = require('./icons/fast-forward');

var _fastForward2 = _interopRequireDefault(_fastForward);

var _feather = require('./icons/feather');

var _feather2 = _interopRequireDefault(_feather);

var _fileMinus = require('./icons/file-minus');

var _fileMinus2 = _interopRequireDefault(_fileMinus);

var _filePlus = require('./icons/file-plus');

var _filePlus2 = _interopRequireDefault(_filePlus);

var _fileText = require('./icons/file-text');

var _fileText2 = _interopRequireDefault(_fileText);

var _file = require('./icons/file');

var _file2 = _interopRequireDefault(_file);

var _film = require('./icons/film');

var _film2 = _interopRequireDefault(_film);

var _filter = require('./icons/filter');

var _filter2 = _interopRequireDefault(_filter);

var _flag = require('./icons/flag');

var _flag2 = _interopRequireDefault(_flag);

var _folderMinus = require('./icons/folder-minus');

var _folderMinus2 = _interopRequireDefault(_folderMinus);

var _folderPlus = require('./icons/folder-plus');

var _folderPlus2 = _interopRequireDefault(_folderPlus);

var _folder = require('./icons/folder');

var _folder2 = _interopRequireDefault(_folder);

var _frown = require('./icons/frown');

var _frown2 = _interopRequireDefault(_frown);

var _gift = require('./icons/gift');

var _gift2 = _interopRequireDefault(_gift);

var _gitBranch = require('./icons/git-branch');

var _gitBranch2 = _interopRequireDefault(_gitBranch);

var _gitCommit = require('./icons/git-commit');

var _gitCommit2 = _interopRequireDefault(_gitCommit);

var _gitMerge = require('./icons/git-merge');

var _gitMerge2 = _interopRequireDefault(_gitMerge);

var _gitPullRequest = require('./icons/git-pull-request');

var _gitPullRequest2 = _interopRequireDefault(_gitPullRequest);

var _github = require('./icons/github');

var _github2 = _interopRequireDefault(_github);

var _gitlab = require('./icons/gitlab');

var _gitlab2 = _interopRequireDefault(_gitlab);

var _globe = require('./icons/globe');

var _globe2 = _interopRequireDefault(_globe);

var _grid = require('./icons/grid');

var _grid2 = _interopRequireDefault(_grid);

var _hardDrive = require('./icons/hard-drive');

var _hardDrive2 = _interopRequireDefault(_hardDrive);

var _hash = require('./icons/hash');

var _hash2 = _interopRequireDefault(_hash);

var _headphones = require('./icons/headphones');

var _headphones2 = _interopRequireDefault(_headphones);

var _heart = require('./icons/heart');

var _heart2 = _interopRequireDefault(_heart);

var _helpCircle = require('./icons/help-circle');

var _helpCircle2 = _interopRequireDefault(_helpCircle);

var _home = require('./icons/home');

var _home2 = _interopRequireDefault(_home);

var _image = require('./icons/image');

var _image2 = _interopRequireDefault(_image);

var _inbox = require('./icons/inbox');

var _inbox2 = _interopRequireDefault(_inbox);

var _info = require('./icons/info');

var _info2 = _interopRequireDefault(_info);

var _instagram = require('./icons/instagram');

var _instagram2 = _interopRequireDefault(_instagram);

var _italic = require('./icons/italic');

var _italic2 = _interopRequireDefault(_italic);

var _key = require('./icons/key');

var _key2 = _interopRequireDefault(_key);

var _layers = require('./icons/layers');

var _layers2 = _interopRequireDefault(_layers);

var _layout = require('./icons/layout');

var _layout2 = _interopRequireDefault(_layout);

var _lifeBuoy = require('./icons/life-buoy');

var _lifeBuoy2 = _interopRequireDefault(_lifeBuoy);

var _link = require('./icons/link-2');

var _link2 = _interopRequireDefault(_link);

var _link3 = require('./icons/link');

var _link4 = _interopRequireDefault(_link3);

var _linkedin = require('./icons/linkedin');

var _linkedin2 = _interopRequireDefault(_linkedin);

var _list = require('./icons/list');

var _list2 = _interopRequireDefault(_list);

var _loader = require('./icons/loader');

var _loader2 = _interopRequireDefault(_loader);

var _lock = require('./icons/lock');

var _lock2 = _interopRequireDefault(_lock);

var _logIn = require('./icons/log-in');

var _logIn2 = _interopRequireDefault(_logIn);

var _logOut = require('./icons/log-out');

var _logOut2 = _interopRequireDefault(_logOut);

var _mail = require('./icons/mail');

var _mail2 = _interopRequireDefault(_mail);

var _mapPin = require('./icons/map-pin');

var _mapPin2 = _interopRequireDefault(_mapPin);

var _map = require('./icons/map');

var _map2 = _interopRequireDefault(_map);

var _maximize = require('./icons/maximize-2');

var _maximize2 = _interopRequireDefault(_maximize);

var _maximize3 = require('./icons/maximize');

var _maximize4 = _interopRequireDefault(_maximize3);

var _meh = require('./icons/meh');

var _meh2 = _interopRequireDefault(_meh);

var _menu = require('./icons/menu');

var _menu2 = _interopRequireDefault(_menu);

var _messageCircle = require('./icons/message-circle');

var _messageCircle2 = _interopRequireDefault(_messageCircle);

var _messageSquare = require('./icons/message-square');

var _messageSquare2 = _interopRequireDefault(_messageSquare);

var _micOff = require('./icons/mic-off');

var _micOff2 = _interopRequireDefault(_micOff);

var _mic = require('./icons/mic');

var _mic2 = _interopRequireDefault(_mic);

var _minimize = require('./icons/minimize-2');

var _minimize2 = _interopRequireDefault(_minimize);

var _minimize3 = require('./icons/minimize');

var _minimize4 = _interopRequireDefault(_minimize3);

var _minusCircle = require('./icons/minus-circle');

var _minusCircle2 = _interopRequireDefault(_minusCircle);

var _minusSquare = require('./icons/minus-square');

var _minusSquare2 = _interopRequireDefault(_minusSquare);

var _minus = require('./icons/minus');

var _minus2 = _interopRequireDefault(_minus);

var _monitor = require('./icons/monitor');

var _monitor2 = _interopRequireDefault(_monitor);

var _moon = require('./icons/moon');

var _moon2 = _interopRequireDefault(_moon);

var _moreHorizontal = require('./icons/more-horizontal');

var _moreHorizontal2 = _interopRequireDefault(_moreHorizontal);

var _moreVertical = require('./icons/more-vertical');

var _moreVertical2 = _interopRequireDefault(_moreVertical);

var _move = require('./icons/move');

var _move2 = _interopRequireDefault(_move);

var _music = require('./icons/music');

var _music2 = _interopRequireDefault(_music);

var _navigation = require('./icons/navigation-2');

var _navigation2 = _interopRequireDefault(_navigation);

var _navigation3 = require('./icons/navigation');

var _navigation4 = _interopRequireDefault(_navigation3);

var _octagon = require('./icons/octagon');

var _octagon2 = _interopRequireDefault(_octagon);

var _package = require('./icons/package');

var _package2 = _interopRequireDefault(_package);

var _paperclip = require('./icons/paperclip');

var _paperclip2 = _interopRequireDefault(_paperclip);

var _pauseCircle = require('./icons/pause-circle');

var _pauseCircle2 = _interopRequireDefault(_pauseCircle);

var _pause = require('./icons/pause');

var _pause2 = _interopRequireDefault(_pause);

var _percent = require('./icons/percent');

var _percent2 = _interopRequireDefault(_percent);

var _phoneCall = require('./icons/phone-call');

var _phoneCall2 = _interopRequireDefault(_phoneCall);

var _phoneForwarded = require('./icons/phone-forwarded');

var _phoneForwarded2 = _interopRequireDefault(_phoneForwarded);

var _phoneIncoming = require('./icons/phone-incoming');

var _phoneIncoming2 = _interopRequireDefault(_phoneIncoming);

var _phoneMissed = require('./icons/phone-missed');

var _phoneMissed2 = _interopRequireDefault(_phoneMissed);

var _phoneOff = require('./icons/phone-off');

var _phoneOff2 = _interopRequireDefault(_phoneOff);

var _phoneOutgoing = require('./icons/phone-outgoing');

var _phoneOutgoing2 = _interopRequireDefault(_phoneOutgoing);

var _phone = require('./icons/phone');

var _phone2 = _interopRequireDefault(_phone);

var _pieChart = require('./icons/pie-chart');

var _pieChart2 = _interopRequireDefault(_pieChart);

var _playCircle = require('./icons/play-circle');

var _playCircle2 = _interopRequireDefault(_playCircle);

var _play = require('./icons/play');

var _play2 = _interopRequireDefault(_play);

var _plusCircle = require('./icons/plus-circle');

var _plusCircle2 = _interopRequireDefault(_plusCircle);

var _plusSquare = require('./icons/plus-square');

var _plusSquare2 = _interopRequireDefault(_plusSquare);

var _plus = require('./icons/plus');

var _plus2 = _interopRequireDefault(_plus);

var _pocket = require('./icons/pocket');

var _pocket2 = _interopRequireDefault(_pocket);

var _power = require('./icons/power');

var _power2 = _interopRequireDefault(_power);

var _printer = require('./icons/printer');

var _printer2 = _interopRequireDefault(_printer);

var _radio = require('./icons/radio');

var _radio2 = _interopRequireDefault(_radio);

var _refreshCcw = require('./icons/refresh-ccw');

var _refreshCcw2 = _interopRequireDefault(_refreshCcw);

var _refreshCw = require('./icons/refresh-cw');

var _refreshCw2 = _interopRequireDefault(_refreshCw);

var _repeat = require('./icons/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _rewind = require('./icons/rewind');

var _rewind2 = _interopRequireDefault(_rewind);

var _rotateCcw = require('./icons/rotate-ccw');

var _rotateCcw2 = _interopRequireDefault(_rotateCcw);

var _rotateCw = require('./icons/rotate-cw');

var _rotateCw2 = _interopRequireDefault(_rotateCw);

var _rss = require('./icons/rss');

var _rss2 = _interopRequireDefault(_rss);

var _save = require('./icons/save');

var _save2 = _interopRequireDefault(_save);

var _scissors = require('./icons/scissors');

var _scissors2 = _interopRequireDefault(_scissors);

var _search = require('./icons/search');

var _search2 = _interopRequireDefault(_search);

var _send = require('./icons/send');

var _send2 = _interopRequireDefault(_send);

var _server = require('./icons/server');

var _server2 = _interopRequireDefault(_server);

var _settings = require('./icons/settings');

var _settings2 = _interopRequireDefault(_settings);

var _share = require('./icons/share-2');

var _share2 = _interopRequireDefault(_share);

var _share3 = require('./icons/share');

var _share4 = _interopRequireDefault(_share3);

var _shieldOff = require('./icons/shield-off');

var _shieldOff2 = _interopRequireDefault(_shieldOff);

var _shield = require('./icons/shield');

var _shield2 = _interopRequireDefault(_shield);

var _shoppingBag = require('./icons/shopping-bag');

var _shoppingBag2 = _interopRequireDefault(_shoppingBag);

var _shoppingCart = require('./icons/shopping-cart');

var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

var _shuffle = require('./icons/shuffle');

var _shuffle2 = _interopRequireDefault(_shuffle);

var _sidebar = require('./icons/sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _skipBack = require('./icons/skip-back');

var _skipBack2 = _interopRequireDefault(_skipBack);

var _skipForward = require('./icons/skip-forward');

var _skipForward2 = _interopRequireDefault(_skipForward);

var _slack = require('./icons/slack');

var _slack2 = _interopRequireDefault(_slack);

var _slash = require('./icons/slash');

var _slash2 = _interopRequireDefault(_slash);

var _sliders = require('./icons/sliders');

var _sliders2 = _interopRequireDefault(_sliders);

var _smartphone = require('./icons/smartphone');

var _smartphone2 = _interopRequireDefault(_smartphone);

var _smile = require('./icons/smile');

var _smile2 = _interopRequireDefault(_smile);

var _speaker = require('./icons/speaker');

var _speaker2 = _interopRequireDefault(_speaker);

var _square = require('./icons/square');

var _square2 = _interopRequireDefault(_square);

var _star = require('./icons/star');

var _star2 = _interopRequireDefault(_star);

var _stopCircle = require('./icons/stop-circle');

var _stopCircle2 = _interopRequireDefault(_stopCircle);

var _sun = require('./icons/sun');

var _sun2 = _interopRequireDefault(_sun);

var _sunrise = require('./icons/sunrise');

var _sunrise2 = _interopRequireDefault(_sunrise);

var _sunset = require('./icons/sunset');

var _sunset2 = _interopRequireDefault(_sunset);

var _tablet = require('./icons/tablet');

var _tablet2 = _interopRequireDefault(_tablet);

var _tag = require('./icons/tag');

var _tag2 = _interopRequireDefault(_tag);

var _target = require('./icons/target');

var _target2 = _interopRequireDefault(_target);

var _terminal = require('./icons/terminal');

var _terminal2 = _interopRequireDefault(_terminal);

var _thermometer = require('./icons/thermometer');

var _thermometer2 = _interopRequireDefault(_thermometer);

var _thumbsDown = require('./icons/thumbs-down');

var _thumbsDown2 = _interopRequireDefault(_thumbsDown);

var _thumbsUp = require('./icons/thumbs-up');

var _thumbsUp2 = _interopRequireDefault(_thumbsUp);

var _toggleLeft = require('./icons/toggle-left');

var _toggleLeft2 = _interopRequireDefault(_toggleLeft);

var _toggleRight = require('./icons/toggle-right');

var _toggleRight2 = _interopRequireDefault(_toggleRight);

var _trash = require('./icons/trash-2');

var _trash2 = _interopRequireDefault(_trash);

var _trash3 = require('./icons/trash');

var _trash4 = _interopRequireDefault(_trash3);

var _trello = require('./icons/trello');

var _trello2 = _interopRequireDefault(_trello);

var _trendingDown = require('./icons/trending-down');

var _trendingDown2 = _interopRequireDefault(_trendingDown);

var _trendingUp = require('./icons/trending-up');

var _trendingUp2 = _interopRequireDefault(_trendingUp);

var _triangle = require('./icons/triangle');

var _triangle2 = _interopRequireDefault(_triangle);

var _truck = require('./icons/truck');

var _truck2 = _interopRequireDefault(_truck);

var _tv = require('./icons/tv');

var _tv2 = _interopRequireDefault(_tv);

var _twitter = require('./icons/twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _type = require('./icons/type');

var _type2 = _interopRequireDefault(_type);

var _umbrella = require('./icons/umbrella');

var _umbrella2 = _interopRequireDefault(_umbrella);

var _underline = require('./icons/underline');

var _underline2 = _interopRequireDefault(_underline);

var _unlock = require('./icons/unlock');

var _unlock2 = _interopRequireDefault(_unlock);

var _uploadCloud = require('./icons/upload-cloud');

var _uploadCloud2 = _interopRequireDefault(_uploadCloud);

var _upload = require('./icons/upload');

var _upload2 = _interopRequireDefault(_upload);

var _userCheck = require('./icons/user-check');

var _userCheck2 = _interopRequireDefault(_userCheck);

var _userMinus = require('./icons/user-minus');

var _userMinus2 = _interopRequireDefault(_userMinus);

var _userPlus = require('./icons/user-plus');

var _userPlus2 = _interopRequireDefault(_userPlus);

var _userX = require('./icons/user-x');

var _userX2 = _interopRequireDefault(_userX);

var _user = require('./icons/user');

var _user2 = _interopRequireDefault(_user);

var _users = require('./icons/users');

var _users2 = _interopRequireDefault(_users);

var _videoOff = require('./icons/video-off');

var _videoOff2 = _interopRequireDefault(_videoOff);

var _video = require('./icons/video');

var _video2 = _interopRequireDefault(_video);

var _voicemail = require('./icons/voicemail');

var _voicemail2 = _interopRequireDefault(_voicemail);

var _volume = require('./icons/volume-1');

var _volume2 = _interopRequireDefault(_volume);

var _volume3 = require('./icons/volume-2');

var _volume4 = _interopRequireDefault(_volume3);

var _volumeX = require('./icons/volume-x');

var _volumeX2 = _interopRequireDefault(_volumeX);

var _volume5 = require('./icons/volume');

var _volume6 = _interopRequireDefault(_volume5);

var _watch = require('./icons/watch');

var _watch2 = _interopRequireDefault(_watch);

var _wifiOff = require('./icons/wifi-off');

var _wifiOff2 = _interopRequireDefault(_wifiOff);

var _wifi = require('./icons/wifi');

var _wifi2 = _interopRequireDefault(_wifi);

var _wind = require('./icons/wind');

var _wind2 = _interopRequireDefault(_wind);

var _xCircle = require('./icons/x-circle');

var _xCircle2 = _interopRequireDefault(_xCircle);

var _xSquare = require('./icons/x-square');

var _xSquare2 = _interopRequireDefault(_xSquare);

var _x = require('./icons/x');

var _x2 = _interopRequireDefault(_x);

var _youtube = require('./icons/youtube');

var _youtube2 = _interopRequireDefault(_youtube);

var _zapOff = require('./icons/zap-off');

var _zapOff2 = _interopRequireDefault(_zapOff);

var _zap = require('./icons/zap');

var _zap2 = _interopRequireDefault(_zap);

var _zoomIn = require('./icons/zoom-in');

var _zoomIn2 = _interopRequireDefault(_zoomIn);

var _zoomOut = require('./icons/zoom-out');

var _zoomOut2 = _interopRequireDefault(_zoomOut);

var _orders = require('./icons/orders');
var _discounts = require('./icons/discounts');
var _customers = require('./icons/customers');
var _store = require('./icons/store');
var _products = require('./icons/products');
var _account = require('./icons/account');
var _meter = require('./icons/meter');
var _taxes = require('./icons/taxes');
var _report = require('./icons/report');
var _payment = require('./icons/payment');


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Orders = _orders.default;
exports.Discounts = _discounts.default;
exports.Customers = _customers.default;
exports.Store = _store.default;
exports.Products = _products.default;
exports.Account = _account.default;
exports.Meter = _meter.default;
exports.Taxes = _taxes.default;
exports.Report = _report.default;
exports.Payment = _payment.default;

exports.Activity = _activity2.default;
exports.Airplay = _airplay2.default;
exports.AlertCircle = _alertCircle2.default;
exports.AlertOctagon = _alertOctagon2.default;
exports.AlertTriangle = _alertTriangle2.default;
exports.AlignCenter = _alignCenter2.default;
exports.AlignJustify = _alignJustify2.default;
exports.AlignLeft = _alignLeft2.default;
exports.AlignRight = _alignRight2.default;
exports.Anchor = _anchor2.default;
exports.Aperture = _aperture2.default;
exports.Archive = _archive2.default;
exports.ArrowDownCircle = _arrowDownCircle2.default;
exports.ArrowDownLeft = _arrowDownLeft2.default;
exports.ArrowDownRight = _arrowDownRight2.default;
exports.ArrowDown = _arrowDown2.default;
exports.ArrowLeftCircle = _arrowLeftCircle2.default;
exports.ArrowLeft = _arrowLeft2.default;
exports.ArrowRightCircle = _arrowRightCircle2.default;
exports.ArrowRight = _arrowRight2.default;
exports.ArrowUpCircle = _arrowUpCircle2.default;
exports.ArrowUpLeft = _arrowUpLeft2.default;
exports.ArrowUpRight = _arrowUpRight2.default;
exports.ArrowUp = _arrowUp2.default;
exports.AtSign = _atSign2.default;
exports.Award = _award2.default;
exports.BarChart2 = _barChart2.default;
exports.BarChart = _barChart4.default;
exports.BatteryCharging = _batteryCharging2.default;
exports.Battery = _battery2.default;
exports.BellOff = _bellOff2.default;
exports.Bell = _bell2.default;
exports.Bluetooth = _bluetooth2.default;
exports.Bold = _bold2.default;
exports.BookOpen = _bookOpen2.default;
exports.Book = _book2.default;
exports.Bookmark = _bookmark2.default;
exports.Box = _box2.default;
exports.Briefcase = _briefcase2.default;
exports.Calendar = _calendar2.default;
exports.CameraOff = _cameraOff2.default;
exports.Camera = _camera2.default;
exports.Cast = _cast2.default;
exports.CheckCircle = _checkCircle2.default;
exports.CheckSquare = _checkSquare2.default;
exports.Check = _check2.default;
exports.ChevronDown = _chevronDown2.default;
exports.ChevronLeft = _chevronLeft2.default;
exports.ChevronRight = _chevronRight2.default;
exports.ChevronUp = _chevronUp2.default;
exports.ChevronsDown = _chevronsDown2.default;
exports.ChevronsLeft = _chevronsLeft2.default;
exports.ChevronsRight = _chevronsRight2.default;
exports.ChevronsUp = _chevronsUp2.default;
exports.Chrome = _chrome2.default;
exports.Circle = _circle2.default;
exports.Clipboard = _clipboard2.default;
exports.Clock = _clock2.default;
exports.CloudDrizzle = _cloudDrizzle2.default;
exports.CloudLightning = _cloudLightning2.default;
exports.CloudOff = _cloudOff2.default;
exports.CloudRain = _cloudRain2.default;
exports.CloudSnow = _cloudSnow2.default;
exports.Cloud = _cloud2.default;
exports.Code = _code2.default;
exports.Codepen = _codepen2.default;
exports.Coffee = _coffee2.default;
exports.Command = _command2.default;
exports.Compass = _compass2.default;
exports.Copy = _copy2.default;
exports.CornerDownLeft = _cornerDownLeft2.default;
exports.CornerDownRight = _cornerDownRight2.default;
exports.CornerLeftDown = _cornerLeftDown2.default;
exports.CornerLeftUp = _cornerLeftUp2.default;
exports.CornerRightDown = _cornerRightDown2.default;
exports.CornerRightUp = _cornerRightUp2.default;
exports.CornerUpLeft = _cornerUpLeft2.default;
exports.CornerUpRight = _cornerUpRight2.default;
exports.Cpu = _cpu2.default;
exports.CreditCard = _creditCard2.default;
exports.Crop = _crop2.default;
exports.Crosshair = _crosshair2.default;
exports.Database = _database2.default;
exports.Delete = _delete2.default;
exports.Disc = _disc2.default;
exports.DollarSign = _dollarSign2.default;
exports.DownloadCloud = _downloadCloud2.default;
exports.Download = _download2.default;
exports.Droplet = _droplet2.default;
exports.Edit2 = _edit2.default;
exports.Edit3 = _edit4.default;
exports.Edit = _edit6.default;
exports.ExternalLink = _externalLink2.default;
exports.EyeOff = _eyeOff2.default;
exports.Eye = _eye2.default;
exports.Facebook = _facebook2.default;
exports.FastForward = _fastForward2.default;
exports.Feather = _feather2.default;
exports.FileMinus = _fileMinus2.default;
exports.FilePlus = _filePlus2.default;
exports.FileText = _fileText2.default;
exports.File = _file2.default;
exports.Film = _film2.default;
exports.Filter = _filter2.default;
exports.Flag = _flag2.default;
exports.FolderMinus = _folderMinus2.default;
exports.FolderPlus = _folderPlus2.default;
exports.Folder = _folder2.default;
exports.Frown = _frown2.default;
exports.Gift = _gift2.default;
exports.GitBranch = _gitBranch2.default;
exports.GitCommit = _gitCommit2.default;
exports.GitMerge = _gitMerge2.default;
exports.GitPullRequest = _gitPullRequest2.default;
exports.GitHub = _github2.default;
exports.Gitlab = _gitlab2.default;
exports.Globe = _globe2.default;
exports.Grid = _grid2.default;
exports.HardDrive = _hardDrive2.default;
exports.Hash = _hash2.default;
exports.Headphones = _headphones2.default;
exports.Heart = _heart2.default;
exports.HelpCircle = _helpCircle2.default;
exports.Home = _home2.default;
exports.Image = _image2.default;
exports.Inbox = _inbox2.default;
exports.Info = _info2.default;
exports.Instagram = _instagram2.default;
exports.Italic = _italic2.default;
exports.Key = _key2.default;
exports.Layers = _layers2.default;
exports.Layout = _layout2.default;
exports.LifeBuoy = _lifeBuoy2.default;
exports.Link2 = _link2.default;
exports.Link = _link4.default;
exports.Linkedin = _linkedin2.default;
exports.List = _list2.default;
exports.Loader = _loader2.default;
exports.Lock = _lock2.default;
exports.LogIn = _logIn2.default;
exports.LogOut = _logOut2.default;
exports.Mail = _mail2.default;
exports.MapPin = _mapPin2.default;
exports.Map = _map2.default;
exports.Maximize2 = _maximize2.default;
exports.Maximize = _maximize4.default;
exports.Meh = _meh2.default;
exports.Menu = _menu2.default;
exports.MessageCircle = _messageCircle2.default;
exports.MessageSquare = _messageSquare2.default;
exports.MicOff = _micOff2.default;
exports.Mic = _mic2.default;
exports.Minimize2 = _minimize2.default;
exports.Minimize = _minimize4.default;
exports.MinusCircle = _minusCircle2.default;
exports.MinusSquare = _minusSquare2.default;
exports.Minus = _minus2.default;
exports.Monitor = _monitor2.default;
exports.Moon = _moon2.default;
exports.MoreHorizontal = _moreHorizontal2.default;
exports.MoreVertical = _moreVertical2.default;
exports.Move = _move2.default;
exports.Music = _music2.default;
exports.Navigation2 = _navigation2.default;
exports.Navigation = _navigation4.default;
exports.Octagon = _octagon2.default;
exports.Package = _package2.default;
exports.Paperclip = _paperclip2.default;
exports.PauseCircle = _pauseCircle2.default;
exports.Pause = _pause2.default;
exports.Percent = _percent2.default;
exports.PhoneCall = _phoneCall2.default;
exports.PhoneForwarded = _phoneForwarded2.default;
exports.PhoneIncoming = _phoneIncoming2.default;
exports.PhoneMissed = _phoneMissed2.default;
exports.PhoneOff = _phoneOff2.default;
exports.PhoneOutgoing = _phoneOutgoing2.default;
exports.Phone = _phone2.default;
exports.PieChart = _pieChart2.default;
exports.PlayCircle = _playCircle2.default;
exports.Play = _play2.default;
exports.PlusCircle = _plusCircle2.default;
exports.PlusSquare = _plusSquare2.default;
exports.Plus = _plus2.default;
exports.Pocket = _pocket2.default;
exports.Power = _power2.default;
exports.Printer = _printer2.default;
exports.Radio = _radio2.default;
exports.RefreshCcw = _refreshCcw2.default;
exports.RefreshCw = _refreshCw2.default;
exports.Repeat = _repeat2.default;
exports.Rewind = _rewind2.default;
exports.RotateCcw = _rotateCcw2.default;
exports.RotateCw = _rotateCw2.default;
exports.Rss = _rss2.default;
exports.Save = _save2.default;
exports.Scissors = _scissors2.default;
exports.Search = _search2.default;
exports.Send = _send2.default;
exports.Server = _server2.default;
exports.Settings = _settings2.default;
exports.Share2 = _share2.default;
exports.Share = _share4.default;
exports.ShieldOff = _shieldOff2.default;
exports.Shield = _shield2.default;
exports.ShoppingBag = _shoppingBag2.default;
exports.ShoppingCart = _shoppingCart2.default;
exports.Shuffle = _shuffle2.default;
exports.Sidebar = _sidebar2.default;
exports.SkipBack = _skipBack2.default;
exports.SkipForward = _skipForward2.default;
exports.Slack = _slack2.default;
exports.Slash = _slash2.default;
exports.Sliders = _sliders2.default;
exports.Smartphone = _smartphone2.default;
exports.Smile = _smile2.default;
exports.Speaker = _speaker2.default;
exports.Square = _square2.default;
exports.Star = _star2.default;
exports.StopCircle = _stopCircle2.default;
exports.Sun = _sun2.default;
exports.Sunrise = _sunrise2.default;
exports.Sunset = _sunset2.default;
exports.Tablet = _tablet2.default;
exports.Tag = _tag2.default;
exports.Target = _target2.default;
exports.Terminal = _terminal2.default;
exports.Thermometer = _thermometer2.default;
exports.ThumbsDown = _thumbsDown2.default;
exports.ThumbsUp = _thumbsUp2.default;
exports.ToggleLeft = _toggleLeft2.default;
exports.ToggleRight = _toggleRight2.default;
exports.Trash2 = _trash2.default;
exports.Trash = _trash4.default;
exports.Trello = _trello2.default;
exports.TrendingDown = _trendingDown2.default;
exports.TrendingUp = _trendingUp2.default;
exports.Triangle = _triangle2.default;
exports.Truck = _truck2.default;
exports.Tv = _tv2.default;
exports.Twitter = _twitter2.default;
exports.Type = _type2.default;
exports.Umbrella = _umbrella2.default;
exports.Underline = _underline2.default;
exports.Unlock = _unlock2.default;
exports.UploadCloud = _uploadCloud2.default;
exports.Upload = _upload2.default;
exports.UserCheck = _userCheck2.default;
exports.UserMinus = _userMinus2.default;
exports.UserPlus = _userPlus2.default;
exports.UserX = _userX2.default;
exports.User = _user2.default;
exports.Users = _users2.default;
exports.VideoOff = _videoOff2.default;
exports.Video = _video2.default;
exports.Voicemail = _voicemail2.default;
exports.Volume1 = _volume2.default;
exports.Volume2 = _volume4.default;
exports.VolumeX = _volumeX2.default;
exports.Volume = _volume6.default;
exports.Watch = _watch2.default;
exports.WifiOff = _wifiOff2.default;
exports.Wifi = _wifi2.default;
exports.Wind = _wind2.default;
exports.XCircle = _xCircle2.default;
exports.XSquare = _xSquare2.default;
exports.X = _x2.default;
exports.Youtube = _youtube2.default;
exports.ZapOff = _zapOff2.default;
exports.Zap = _zap2.default;
exports.ZoomIn = _zoomIn2.default;
exports.ZoomOut = _zoomOut2.default;