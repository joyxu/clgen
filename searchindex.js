Search.setIndex({docnames:["api/index","bin/index","index","installation","license"],envversion:51,filenames:["api/index.rst","bin/index.rst","index.rst","installation.md","license.rst"],objects:{"":{clgen:[0,0,0,"-"]},"clgen.atomizer":{Atomizer:[0,2,1,""],CharacterAtomizer:[0,2,1,""],GreedyAtomizer:[0,2,1,""],VocabError:[0,1,1,""]},"clgen.atomizer.Atomizer":{atomize:[0,3,1,""],atoms:[0,4,1,""],deatomize:[0,3,1,""],from_text:[0,5,1,""],indices:[0,4,1,""],tokenize:[0,3,1,""]},"clgen.atomizer.CharacterAtomizer":{atomize:[0,3,1,""],from_text:[0,5,1,""]},"clgen.atomizer.GreedyAtomizer":{atomize:[0,3,1,""],from_text:[0,5,1,""]},"clgen.cldrive":{CLDriveException:[0,1,1,""],E_BAD_ARGS:[0,1,1,""],E_BAD_CODE:[0,1,1,""],E_BAD_DRIVER:[0,1,1,""],E_BAD_PROFILE:[0,1,1,""],E_INPUT_INSENSITIVE:[0,1,1,""],E_NONDETERMINISTIC:[0,1,1,""],E_NON_TERMINATING:[0,1,1,""],E_NO_INPUT:[0,1,1,""],E_NO_OUTPUTS:[0,1,1,""],E_UGLY_CODE:[0,1,1,""],KernelDriver:[0,2,1,""],KernelDriverException:[0,1,1,""],KernelPayload:[0,2,1,""],OpenCLDeviceNotFound:[0,1,1,""],OpenCLDriverException:[0,1,1,""],OpenCLNotSupported:[0,1,1,""],device_type_matches:[0,6,1,""],file:[0,6,1,""],get_event_time:[0,6,1,""],init_opencl:[0,6,1,""],kernel:[0,6,1,""]},"clgen.cldrive.KernelDriver":{build_program:[0,5,1,""],context:[0,4,1,""],kernel:[0,4,1,""],name:[0,4,1,""],profile:[0,3,1,""],program:[0,4,1,""],prototype:[0,4,1,""],runtimes:[0,4,1,""],source:[0,4,1,""],transfers:[0,4,1,""],validate:[0,3,1,""],wgsizes:[0,4,1,""]},"clgen.cldrive.KernelPayload":{args:[0,4,1,""],bytes:[0,4,1,""],context:[0,4,1,""],create_random:[0,5,1,""],create_sequential:[0,5,1,""],device_to_host:[0,3,1,""],host_to_device:[0,3,1,""],json:[0,3,1,""],kargs:[0,4,1,""],ndrange:[0,4,1,""],transfersize:[0,4,1,""]},"clgen.cli":{ArgumentParser:[0,2,1,""],main:[0,6,1,""],print_version_and_exit:[0,6,1,""]},"clgen.cli.ArgumentParser":{parse_args:[0,3,1,""]},"clgen.clutil":{KernelArg:[0,2,1,""],KernelPrototype:[0,2,1,""],OpenCLUtilException:[0,1,1,""],PrototypeException:[0,1,1,""],UnknownTypeException:[0,1,1,""],extract_prototype:[0,6,1,""],get_attribute_range:[0,6,1,""],get_cl_kernel:[0,6,1,""],get_cl_kernel_end_idx:[0,6,1,""],get_cl_kernels:[0,6,1,""],get_contexts_and_devices:[0,6,1,""],strip_attributes:[0,6,1,""]},"clgen.clutil.KernelArg":{bare_type:[0,4,1,""],components:[0,4,1,""],is_const:[0,4,1,""],is_global:[0,4,1,""],is_local:[0,4,1,""],is_pointer:[0,4,1,""],is_restrict:[0,4,1,""],is_vector:[0,4,1,""],name:[0,4,1,""],numpy_type:[0,4,1,""],qualifiers:[0,4,1,""],string:[0,4,1,""],type:[0,4,1,""],vector_width:[0,4,1,""]},"clgen.clutil.KernelPrototype":{args:[0,4,1,""],from_source:[0,5,1,""],is_synthesizable:[0,4,1,""],name:[0,4,1,""]},"clgen.corpus":{Corpus:[0,2,1,""],FeaturesError:[0,1,1,""],encode:[0,6,1,""],get_atomizer:[0,6,1,""],get_features:[0,6,1,""],unpack_directory_if_needed:[0,6,1,""]},"clgen.corpus.Corpus":{batch_size:[0,4,1,""],contentfiles:[0,3,1,""],create_batches:[0,3,1,""],from_json:[0,5,1,""],lock:[0,4,1,""],most_common_prototypes:[0,3,1,""],next_batch:[0,3,1,""],num_batches:[0,4,1,""],preprocessed:[0,3,1,""],reset_batch_pointer:[0,3,1,""],seq_length:[0,4,1,""],set_batch_pointer:[0,3,1,""],size:[0,4,1,""],to_json:[0,3,1,""]},"clgen.dbutil":{cc:[0,6,1,""],charcount_aggregator:[0,2,1,""],connect:[0,6,1,""],create_db:[0,6,1,""],dump_db:[0,6,1,""],escape_sql_key:[0,6,1,""],get_all_sampler_datasets:[0,6,1,""],get_kernel:[0,6,1,""],get_meta:[0,6,1,""],is_github:[0,6,1,""],is_modified:[0,6,1,""],kernel_ids:[0,6,1,""],kid_to_path:[0,6,1,""],lc:[0,6,1,""],linecount:[0,6,1,""],linecount_aggregator:[0,2,1,""],md5sum_aggregator:[0,2,1,""],merge:[0,6,1,""],num_good_kernels:[0,6,1,""],num_rows_in:[0,6,1,""],remove_bad_preprocessed:[0,6,1,""],remove_preprocessed:[0,6,1,""],run_script:[0,6,1,""],set_meta:[0,6,1,""],set_modified_status:[0,6,1,""],set_version_meta:[0,6,1,""],sql_insert_dict:[0,6,1,""],table_exists:[0,6,1,""],version_meta_matches:[0,6,1,""]},"clgen.dbutil.charcount_aggregator":{finalize:[0,3,1,""],step:[0,3,1,""]},"clgen.dbutil.linecount_aggregator":{finalize:[0,3,1,""],step:[0,3,1,""]},"clgen.dbutil.md5sum_aggregator":{finalize:[0,3,1,""],step:[0,3,1,""]},"clgen.explore":{bigint:[0,6,1,""],decode:[0,6,1,""],div:[0,6,1,""],explore:[0,6,1,""],explore_gh:[0,6,1,""],gh_stats_worker:[0,6,1,""],median:[0,6,1,""],seq_stats:[0,6,1,""],stats_worker:[0,6,1,""]},"clgen.features":{FeatureExtractionError:[0,1,1,""],feature_headers:[0,6,1,""],features:[0,6,1,""],files:[0,6,1,""],summarize:[0,6,1,""],to_np_arrays:[0,6,1,""]},"clgen.fetch":{CLSmithException:[0,1,1,""],FetchError:[0,1,1,""],HeaderNotFoundException:[0,1,1,""],clsmith:[0,6,1,""],content_db:[0,6,1,""],download_file:[0,6,1,""],fetch_fs:[0,6,1,""],get_clsmith_program:[0,6,1,""],github:[0,6,1,""],include_clsmith_path:[0,6,1,""],inline_clsmith_headers:[0,6,1,""],inline_fs_headers:[0,6,1,""],is_opencl_path:[0,6,1,""],print_clsmith_counters:[0,6,1,""],print_counters:[0,6,1,""],print_file_details:[0,6,1,""],print_repo_details:[0,6,1,""],process_cl_file:[0,6,1,""],process_file:[0,6,1,""],process_repo:[0,6,1,""],rate_limit:[0,6,1,""]},"clgen.log":{debug:[0,6,1,""],error:[0,6,1,""],fatal:[0,6,1,""],info:[0,6,1,""],init:[0,6,1,""],verbose:[0,6,1,""],warning:[0,6,1,""]},"clgen.model":{Model:[0,2,1,""],ModelError:[0,1,1,""],from_json:[0,6,1,""],get_default_author:[0,6,1,""]},"clgen.model.Model":{checkpoint_path:[0,4,1,""],epochs:[0,4,1,""],from_json:[0,5,1,""],grad_clip:[0,4,1,""],lock:[0,4,1,""],model_type:[0,4,1,""],num_layers:[0,4,1,""],rnn_size:[0,4,1,""],to_json:[0,3,1,""],train:[0,3,1,""],train_opts:[0,4,1,""]},"clgen.preprocess":{BadCodeException:[0,1,1,""],ClangException:[0,1,1,""],ClangFormatException:[0,1,1,""],DbImportWorker:[0,2,1,""],GPUVerifyException:[0,1,1,""],InstructionCountException:[0,1,1,""],LlvmException:[0,1,1,""],NoCodeException:[0,1,1,""],OptException:[0,1,1,""],PreprocessWorker:[0,2,1,""],RewriterException:[0,1,1,""],UglyCodeException:[0,1,1,""],bytecode_features:[0,6,1,""],clang_cl_args:[0,6,1,""],clangformat_ocl:[0,6,1,""],compile_cl_bytecode:[0,6,1,""],compiler_preprocess_cl:[0,6,1,""],ensure_has_code:[0,6,1,""],gpuverify:[0,6,1,""],instcounts2ratios:[0,6,1,""],parse_instcounts:[0,6,1,""],preprocess:[0,6,1,""],preprocess_db:[0,6,1,""],preprocess_file:[0,6,1,""],preprocess_for_db:[0,6,1,""],preprocess_inplace:[0,6,1,""],rewrite_cl:[0,6,1,""],sanitize_prototype:[0,6,1,""],verify_bytecode_features:[0,6,1,""]},"clgen.preprocess.DbImportWorker":{run:[0,3,1,""]},"clgen.preprocess.PreprocessWorker":{run:[0,3,1,""]},"clgen.sampler":{SampleConsumer:[0,2,1,""],SampleProducer:[0,2,1,""],Sampler:[0,2,1,""],from_json:[0,6,1,""],serialize_argspec:[0,6,1,""]},"clgen.sampler.SampleConsumer":{min_kernels_and_samples_cond:[0,3,1,""],min_kernels_cond:[0,3,1,""],min_kernels_progress:[0,3,1,""],min_samples_cond:[0,3,1,""],min_samples_progress:[0,3,1,""],null_cond:[0,3,1,""],run:[0,3,1,""]},"clgen.sampler.SampleProducer":{run:[0,3,1,""],stop:[0,3,1,""],stop_requested:[0,4,1,""]},"clgen.sampler.Sampler":{cache:[0,3,1,""],from_json:[0,5,1,""],min_kernels:[0,4,1,""],min_samples:[0,4,1,""],num_good_kernels:[0,4,1,""],num_samples:[0,4,1,""],sample:[0,3,1,""],to_json:[0,3,1,""]},clgen:{"native":[0,0,0,"-"],CLgenError:[0,1,1,""],CLgenObject:[0,2,1,""],File404:[0,1,1,""],InternalError:[0,1,1,""],InvalidFile:[0,1,1,""],UserError:[0,1,1,""],atomizer:[0,0,0,"-"],cachepath:[0,6,1,""],cldrive:[0,0,0,"-"],cli:[0,0,0,"-"],clutil:[0,0,0,"-"],config:[0,0,0,"-"],corpus:[0,0,0,"-"],data_path:[0,6,1,""],dbutil:[0,0,0,"-"],explore:[0,0,0,"-"],features:[0,0,0,"-"],fetch:[0,0,0,"-"],log:[0,0,0,"-"],main:[0,6,1,""],mkcache:[0,6,1,""],model:[0,0,0,"-"],must_exist:[0,6,1,""],package_data:[0,6,1,""],package_path:[0,6,1,""],package_str:[0,6,1,""],platform_info:[0,6,1,""],preprocess:[0,0,0,"-"],sampler:[0,0,0,"-"],sql_script:[0,6,1,""],terminating:[0,6,1,""],version:[0,6,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","exception","Python exception"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:exception","2":"py:class","3":"py:method","4":"py:attribute","5":"py:staticmethod","6":"py:function"},terms:{"abstract":0,"byte":[0,1],"case":[0,1,4],"char":0,"class":[0,4],"const":0,"default":[0,1],"final":[0,4],"float":0,"function":[0,4],"import":[1,4],"int":0,"long":4,"new":[0,1,4],"public":4,"return":[0,4],"short":0,"static":[0,1],"throw":0,"true":0,"try":0,"void":[0,4],AND:4,And:4,BEING:4,BUT:4,But:4,FOR:4,For:[1,2,4],HAS:4,IDs:0,NOT:[0,4],Not:4,SUCH:4,Such:4,THE:4,THERE:4,The:[0,1,4],There:0,These:4,USE:4,Use:[1,4],Uses:0,WILL:4,WITH:4,__global:0,__kernel:0,__local:0,_build:0,_dump_db:0,_io:0,a1in:0,a1out:0,a2in:0,a2out:0,abil:4,abov:[0,4],absenc:4,absolut:[0,4],abus:4,accept:4,access:[1,4],accompani:4,accord:4,acknowledg:4,acquir:4,across:[1,4],act:1,action:4,activ:[2,3,4],actual:[0,4],adapt:4,add:[0,4],added:4,addit:[0,4],address:4,adopt:4,advers:4,advis:4,affect:4,affero:4,affirm:4,after:[0,4],again:[2,3],against:4,aggreg:[0,4],agre:4,agreement:4,aim:4,alastair:1,all:[0,1,2,3,4],all_clgen_vers:0,alleg:4,allow:[2,4],along:4,alreadi:[0,4],also:4,altern:4,although:4,among:4,analysi:[0,1],analyt:0,ancillari:4,andrei:1,ani:[0,1,2,4],anon:0,anti:4,anyon:4,anyth:4,api:[1,2],append:0,appli:4,applic:[2,4],appraoch:0,appropri:4,approxim:4,archiv:0,area:[0,4],arg:0,argpars:0,argument:[0,1],argumentpars:0,aris:4,arrai:0,arrang:4,articl:[1,4],arug:0,ask:4,assembl:1,assert:[0,4],asset:4,associ:[0,4],assum:4,assumpt:4,assur:4,atom:2,atomsself:0,attempt:[0,4],attribut:[0,4],author:[0,4],autom:1,automat:[2,4],avail:[0,4],avoid:4,awai:4,b1in:0,b1out:0,b2in:0,b2out:0,back:0,bad:[0,1],badcodeexcept:0,bare:0,bare_typ:0,base:[0,4],bash:[2,3],basic:4,batch:0,batch_siz:0,bc_featur:0,becaus:4,been:[0,4],befor:1,behalf:4,being:[1,4],believ:4,below:4,benefit:4,between:[0,4],beyond:4,big:0,bigint:0,bin:[2,3],binari:0,bitfield:0,block:0,bodi:4,bool:0,both:4,boyl:1,brace:0,bug:0,build:[0,2],build_program:0,built:0,busi:4,bytecod:[0,1],bytecode_featur:0,cach:[0,1],cachepath:0,call:[0,4],can:[0,1,4],cannot:[1,4],carri:4,caught:0,caus:4,ceas:4,certain:4,cessat:4,cgo:1,chang:[0,4],charact:0,characten:0,character:4,characteratom:0,charcount_aggreg:0,charg:4,check:[0,2],checker:[0,1],checkout:3,checkpoint:0,checkpoint_path:0,checksum:0,chong:1,choos:4,chri:1,chrisc:1,chriscummin:[1,2,3],chrislidburi:1,christoph:1,circumst:4,circumvent:4,civil:4,claim:4,clang:[0,2],clang_cl_arg:0,clang_format:0,clangexcept:0,clangformat_ocl:0,clangformatexcept:0,cldrive:2,cldriveexcept:0,clear:4,clearli:4,clgen:[2,3],clgen_author:0,clgen_featur:0,clgen_rewrit:0,clgenerror:0,clgenobject:0,cli:2,clone:3,close:4,clsmith:[0,2],clsmithexcept:0,clutil:2,code:[0,1,4],collect:[1,4],colleg:1,column:0,com:[1,2,3],combin:4,come:4,comma:0,command:[0,2,4],command_queue_properti:0,comment:0,commerci:4,commit:4,common:4,commun:4,compar:0,compil:[0,1,3,4],compile_cl_bytecod:0,compiler_preprocess_cl:0,complet:0,compli:4,complianc:4,compon:[0,4],comput:[0,4],computation:1,concern:4,condit:[0,2],config:2,configur:[0,2,3],connect:[0,4],consequ:4,consequenti:4,consid:4,consist:[1,4],conspicu:4,constant:0,constantli:4,constitut:4,constru:4,construct:0,constructor:0,consum:4,contain:[0,1,4],content:[0,1,4],content_db:0,contentfil:0,contentid:0,context:[0,4],continu:[1,4],contractu:4,contradict:4,contrast:4,contributor:4,control:4,convei:4,conveni:4,convert:0,convey:4,copi:[1,4],copyleft:4,copyright:[1,4],core:2,corpu:[1,2],corpus:[0,1],corpus_json:0,correct:4,correspond:[1,4],cost:4,could:[0,4],count:0,counter:0,counterclaim:4,countri:4,court:4,coven:4,cover:4,coverag:4,cpu:[1,2],creat:[0,2,3],create_batch:0,create_db:0,create_random:0,create_sequenti:0,criterion:4,cross:4,csv:[0,1],csv_path:0,ctx:0,cuda:2,cudnn:2,cummin:1,cure:4,curl:[2,3],cursor:0,custom:4,customarili:4,dai:4,damag:4,danger:4,data:[0,1,4],data_path:0,databas:[0,1],databs:0,dataset:[0,1],datbas:1,date:4,db_path:0,dbimportwork:0,dbutil:2,deactiv:[2,3],deatom:0,debug:[0,1],decemb:4,decid:4,decim:0,declin:4,decod:0,deduc:0,deem:4,deep:[0,1,2],defect:4,defens:4,defin:4,definit:4,delet:1,delta:0,demand:1,deni:4,denomin:[0,4],densiti:0,dep:[2,3],depriv:4,deriv:0,descript:0,design:[1,4],destin:0,detail:[0,4],determin:[0,1,4],dev:3,develop:[1,2,4],devic:[0,1,4],device_info:0,device_to_host:0,device_typ:0,device_type_match:0,devtyp:0,dict:0,did:0,differ:[0,4],dir:1,direct:4,directli:4,directori:[0,1,2,3],disabl:[0,2],disclaim:4,discret:1,discriminatori:4,displai:4,dist:[0,1],distinct:2,distinguish:4,distribut:[2,4],div:0,divis:0,doctre:0,document:4,doe:[0,1,2,4],doesn:0,domain:4,don:[0,1],donaldson:1,done:[2,3],doubt:4,download:0,download_fil:0,downstream:4,drive:[0,1],driver:0,dsize:1,dump:[0,2],dump_db:0,durabl:4,dure:[0,1],dwell:4,dynam:[0,1,4],e_bad_arg:0,e_bad_cod:0,e_bad_driv:0,e_bad_profil:0,e_input_insensit:0,e_no_input:0,e_no_output:0,e_non_termin:0,e_nondeterminist:0,e_ugly_cod:0,each:[1,2,4],earlier:4,effect:4,effort:[1,4],either:4,elaps:0,els:0,embodi:4,empti:[0,1],enabl:[0,2,4],encod:0,end:[0,1],enforc:[0,4],engin:0,ensur:[0,4],ensure_has_cod:0,enter:4,entir:4,entiti:4,entri:[0,1],entrypoint:0,environ:[0,1,2,3],environment:0,eof:1,epoch:0,equal:0,equival:4,erron:4,error:[0,1],error_limit:0,escap:0,escape_sql_kei:0,essenti:4,etc:0,even:4,event:[0,4],ever:4,everi:4,everyon:4,exact:4,exampl:[0,4],except:[0,4],exclud:4,exclus:[0,4],excus:4,execut:[0,1,4],exercis:[1,4],exist:[0,1,2],exit:[0,1],expect:[0,1,4],explain:4,explicitli:4,explor:2,exploratori:[0,1],explore_gh:0,express:4,expressli:4,extend:4,extens:[0,4],extent:4,extract:[0,1],extract_prototyp:0,facil:4,fail:[0,4],failur:4,fair:4,fals:0,famili:4,fashion:4,fast:2,fatal:[0,1],fatal_error:0,favor:4,featur:[2,4],feature_head:0,featureextractionerror:0,featureserror:0,fee:4,fetch:2,fetch_f:0,fetcherror:0,field:1,file404:0,file:[0,1,4],filenam:0,filesystem:0,find:[0,4],fine:1,first:[0,1,4],fit:[0,4],five:1,fix:4,flag:0,flatten:[],float32:0,float4:0,flow:4,folk:1,follow:[0,1,2,4],foo:0,forbid:4,forc:4,form:4,format:[0,1,4],found:0,foundat:4,fragment:2,free:4,freedom:4,frequent:0,from:[0,1,2,4],from_json:0,from_sourc:0,from_text:0,front:1,fscach:0,fsf:4,fulfil:4,fundament:4,further:4,futur:[0,4],fuzz:1,gcc:2,gener:[0,1,2,4],get:[0,4],get_all_sampler_dataset:0,get_atom:0,get_attribute_rang:0,get_cl_kernel:0,get_cl_kernel_end_idx:0,get_clsmith_program:0,get_contexts_and_devic:0,get_default_author:0,get_event_tim:0,get_featur:0,get_kernel:0,get_meta:0,gh_stats_work:0,git:[2,3],github:[0,2,3],github_pw:[0,1],github_token:[0,1],github_usernam:[0,1],githubusercont:[2,3],give:4,given:[0,4],glibc:2,global:0,gmail:1,gnu:[2,4],good:0,govern:4,gpl:4,gpu:[1,2],gpuverifi:[0,1],gpuverifyexcept:0,grad_clip:0,grant:4,graph:[],graph_bc_lc:[],graph_ocl_lc:[],graph_ocl_star:[],grati:4,greedi:0,greedyatom:0,grew:1,ground:1,guarante:4,had:4,handl:0,handler:0,has:[0,4],have:[0,4],header:[0,1],header_path:0,headerfil:0,headernotfoundexcept:0,help:[0,1],here:1,hereaft:4,heterogen:1,high:1,highli:1,hoc:1,holder:4,host:[0,4],host_to_devic:0,hostnam:0,household:4,how:4,howev:4,html:0,http:[1,2,3,4],identifi:[0,4],ieee:1,ignor:0,ignore_exist:0,impact:2,imperi:1,implement:[1,4],impli:4,impos:4,in_db_path:0,inabl:4,inaccur:4,inc:4,incident:4,includ:[0,1,4],include_clsmith_path:0,inclus:4,incompat:4,incorpor:4,increas:1,indemnif:4,independ:4,index:[0,2],indic:[0,4],individu:4,industri:4,info:0,inform:[0,1,4],infring:4,init:0,init_opencl:0,initi:[0,4],initialiaz:0,initialis:0,inject:0,inlin:0,inline_clsmith_head:0,inline_fs_head:0,inpath:0,inplac:[0,1],input:[0,1],insanti:0,insensit:0,insert:0,insid:4,instal:[1,4],instanc:0,instanti:[0,1],instantia:0,instcounts2ratio:0,instruct:[0,1],instructioncountexcept:0,int32:0,int4:0,intact:4,intend:4,intent:4,interact:[0,4],interchang:4,interest:4,interf:4,interfac:[0,2,4],intern:0,internalerror:0,internalexcept:0,interpret:4,interrupt:1,intial:0,intim:4,invalid:[0,4],invalidfil:0,irrevoc:4,is_const:0,is_github:0,is_glob:0,is_loc:0,is_modifi:0,is_opencl_path:0,is_point:0,is_restrict:0,is_synthesiz:0,is_vector:0,isn:0,issu:1,item:4,iter:0,its:[2,4],itself:4,job:0,json:0,june:4,karg:0,keep:[1,4],kei:[0,4],kernel:[0,1,4],kernel_id:0,kernel_opt:0,kernelarg:0,kerneldriv:0,kerneldriverexcept:0,kernelpayload:0,kernelprototyp:0,kernels_db:0,keyword:0,kid:0,kid_to_path:0,kind:4,know:4,knowingli:4,knowledg:4,kwarg:0,labm8:0,languag:4,larg:2,larger:4,lascu:1,last:0,later:[2,3,4],latest:[2,3],law:4,lawsuit:4,lc_col:0,leak:0,learn:[0,1,2],least:4,legal:4,length:0,less:0,level:0,liabil:4,liabl:4,libcecl:1,libclc:0,libffi:2,libhdf5:2,librari:4,licens:2,license:4,licensor:4,lidburi:1,like:[0,4],likewis:4,limit:[0,4],line:[0,2],linecount:0,linecount_aggreg:0,link:4,linux:2,list:[0,1,4],litig:4,llvm:0,llvmexcept:0,load:0,local:[0,4],locat:0,lock:0,log:2,london:1,look:0,loss:4,machin:[0,1,2,4],macro:0,made:4,mai:[2,4],main:0,maintain:4,major:[0,4],make:[2,3,4],manag:0,mani:2,manipul:0,manner:4,manufactur:4,map:1,march:4,mark:[0,4],mask:4,match:0,materi:4,max_len:0,max_num_work:0,maximum:0,md5:0,md5sum:0,md5sum_aggreg:0,mean:[1,4],measur:4,median:0,medium:4,meet:4,menu:4,merchant:4,mere:4,merg:[0,2,4],messag:[0,1],met:4,meta:0,metadata:[0,1],metaout:0,method:[0,4],millisecond:0,min_kernel:0,min_kernels_and_samples_cond:0,min_kernels_cond:0,min_kernels_progress:0,min_num_iter:0,min_sampl:0,min_samples_cond:0,min_samples_progress:0,mine:1,minim:1,minor:0,minut:1,misrepresent:4,mkcach:0,mode:[0,1,4],model:[1,2,4],model_json:0,model_typ:0,modelerror:0,modif:4,modifi:[0,4],modul:[0,2],mono:2,more:4,moreov:4,most:[0,4],most_common_prototyp:0,msg:0,multi:0,must:[0,4],must_exist:0,must_valid:0,name:[0,1,4],namespac:0,nathan:1,nativ:2,natur:4,ncurs:2,ndrang:0,necessari:4,need:[0,2,3,4],neither:4,network:[2,4],neural:2,next:[0,4],next_batch:0,nice:1,nocodeexcept:0,non:4,noncommerci:4,nondeterminist:0,none:0,nor:4,normal:4,note:[0,1,2],noth:4,notic:4,notifi:4,notwithstand:4,null_cond:0,num:0,num_batch:0,num_good_kernel:0,num_lay:0,num_rows_in:0,num_sampl:0,number:[0,1,4],numer:0,numjob:0,numpi:0,numpy_typ:0,nvcl:0,nvidia:[0,2],nvptx64:0,object:[0,4],oblig:4,occasion:[0,4],occur:[0,4],oclgrind:0,offer:4,offici:4,older:2,one:[0,1,2,4],onli:[0,1,2,4],opaqu:0,open:[0,2],opencl:[0,1,2],opencldevicenotfound:0,opencldriverexcept:0,openclnotsupport:0,openclutilexcept:0,oper:[0,4],opt:0,optexcept:0,option:[0,1,2,3,4],order:[1,4],ordereddict:0,org:4,organ:4,origin:[0,4],other:[0,2,4],otherwis:4,our:4,out:[0,4],out_path:0,outcom:0,outpath:0,output:[0,1,4],outsid:[0,4],over:0,overrid:1,overview:1,overwrit:0,own:[2,4],packag:[0,2,4],package_data:0,package_path:0,package_str:0,page:2,pair:0,paper:1,paragraph:4,paralellis:1,parallel:1,param:0,paramet:0,pars:0,parse_arg:0,parse_instcount:0,parser:0,part:4,parti:4,particular:[0,4],pass:[0,4],password:[1,2,4],patent:4,path:[0,1],path_compon:0,pattern:4,payload:[0,1],payment:4,peer:4,per:1,perform:[2,4],perman:4,permiss:4,permit:4,perpetu:4,person:4,pertin:4,physic:4,piec:4,pip3:3,pip:3,pipe:0,pipelin:1,place:[0,4],platform:[0,1],platform_info:0,pleas:[1,2],plot:[],plu:4,point:0,pointer:0,portabl:1,portion:4,posit:1,possess:4,possibl:[0,4],power:4,practic:4,pre:0,preambl:2,precis:4,predecessor:4,prefer:4,prefix:0,preprocess:2,preprocess_db:0,preprocess_fil:0,preprocess_for_db:0,preprocess_inplac:0,preprocess_opt:0,preprocessed_kernel:[],preprocessedfil:0,preprocessor:0,preprocesswork:0,present:[0,4],preserv:4,prevent:4,previou:4,previous:2,price:4,primarili:4,print:[0,1],print_clsmith_count:0,print_corpus_dir:0,print_count:0,print_file_detail:0,print_file_list:0,print_model_dir:0,print_repo_detail:0,print_sampler_dir:0,print_version_and_exit:0,printfn:0,prior:4,privat:4,priveledg:2,privileg:2,problem:4,procedur:4,process:[0,1],process_cl_fil:0,process_fil:0,process_repo:0,procur:4,produc:4,product:4,profil:0,program:[0,1,2,4],prohibit:4,promin:4,prompt:2,propag:4,properti:4,proprietari:4,protect:4,protocol:4,prototyp:0,prototypeexcept:0,prove:4,provid:[1,4],provis:4,provision:4,proxi:4,publicli:4,publish:4,purpos:4,pursuant:4,put:0,pyopencl:0,python3:[2,3],python:[2,3],qualifi:[0,4],qualiti:4,queue:0,queue_flag:0,quiet:[0,1],quietli:1,quit:[0,1],rais:0,random:[0,1],randomli:1,rang:0,rate:0,rate_limit:0,ratio:0,raw:[0,2,3],read:[0,4],readabl:4,readi:[0,4],readili:4,readlin:2,reason:4,receipt:4,receiv:4,recemt:0,recipi:4,recogn:4,recommend:2,record:0,recurs:0,refer:4,refrain:4,regard:4,regardless:4,regener:4,reinstat:4,reject:1,rel:0,relat:1,relationship:4,relative_path_compon:0,releas:[2,4],relev:4,reli:4,relicens:4,remain:[0,4],remov:[0,1,4],remove_bad_preprocess:0,remove_preprocess:0,renam:0,render:4,repair:4,replac:0,replace_exist:0,repo:0,repositori:0,repres:[2,4],represent:0,request:[0,1],requir:[0,1,3,4],reset:0,reset_batch_point:0,resolv:4,resourc:1,respect:4,respons:4,restrain:1,restrict:[0,4],result:[0,1,4],resum:1,ret:0,retain:4,retriev:0,revers:1,review:4,revis:4,rewrit:[0,1],rewrite_cl:0,rewriterexcept:0,rewritten:[0,1],right:4,risk:4,rnn_size:0,rom:4,round:0,roundval:0,row:0,royalti:4,rtype:0,rule:4,run:[0,1,2,3,4],run_script:0,runnabl:2,runtim:0,safe:0,sai:4,sake:4,sale:4,same:[0,4],sampl:[0,1],sampleconsum:0,sampleproduc:0,sampler:[1,2],sampler_json:0,sampler_opt:0,sanit:0,sanitize_prototyp:0,satisfi:4,schema:0,scheme:[0,1],scope:[0,4],scrape:0,script:[0,4],search:2,secondarili:4,section:4,see:[0,1],self:0,sell:4,semant:2,semiconductor:4,sep:0,separ:[0,1,4],seper:0,seq_length:0,seq_stat:0,sequenc:0,sequenti:0,sequnec:0,serial:0,serialize_argspec:0,serv:4,server:4,servic:4,set:[0,1],set_batch_point:0,set_meta:0,set_modified_statu:0,set_version_meta:0,shall:4,share:[0,4],shim:[0,1],shimfil:0,shortcom:0,should:[0,4],show:[1,4],signific:4,similar:4,simultan:4,sinc:0,singl:[0,4],size:[0,1],slow:2,softwar:4,sold:4,sole:4,some:[0,2,4],sort:0,sorted_arr:0,sourc:[0,1,2,3,4],source_path:0,spare:4,spawn:0,speak:4,spec:0,special:[0,4],specif:[0,1,4],specifi:[0,4],spirit:4,split:1,sql:[0,1],sql_insert_dict:0,sql_script:0,sqlite3:0,squeez:0,src:0,stack:0,stage:1,stand:4,standard:4,stargaz:[],start:0,start_idx:0,start_text:0,stat:[0,1],state:4,statement:4,stats_work:0,statu:[0,1,4],stderr:0,stdin:0,stdout:0,step:[0,1,4],stop:0,stop_request:0,storag:4,store:1,str:0,stream:0,strict:1,string:0,strip_attribut:0,style:0,subdivid:4,subject:[0,4],sublicens:4,submiss:0,subprogram:4,subsect:4,subset:1,substanti:4,substitut:1,success:0,sudo:[2,3],sue:4,suffic:4,suit:[1,3],sum:0,summar:[0,1],summari:0,supplement:4,support:[0,4],suppress:0,sure:4,surrend:4,surviv:4,sustain:4,symbol:0,syntact:0,synthes:0,system:[0,1,4],systemat:4,tabl:[0,1],table_exist:0,table_nam:0,take:4,tangibl:4,tarbal:0,target:0,target_num_kernel:0,technolog:4,tell:4,term:2,termin:[0,4],test:[1,3],text:[0,1],textiowrapp:0,than:4,thei:4,them:4,therefor:4,thi:[0,1,2,3,4],thing:[0,4],third:4,those:4,though:4,thousand:1,thread:0,threaten:4,three:[0,1,2,4],through:4,thrown:0,thu:4,time:[0,1,4],to_json:0,to_np_arrai:0,token:[0,1],too:4,tool:[3,4],trade:4,trademark:4,train:[0,2],train_opt:0,transact:4,transfer:[0,1,4],transfers:0,translat:0,transmiss:4,treat:[0,1,4],treati:4,tupl:0,two:[0,4],txt:[0,3],type:[0,1],typic:4,ubuntu:2,uchar:0,ugli:[0,1],uglycodeexcept:0,unabl:0,unaccept:4,unchang:0,under:4,unicod:0,uniqu:0,unknowntypeexcept:0,unless:4,unlimit:4,unmodifi:4,unnecessari:4,unpack:[0,4],unpack_directory_if_need:0,unsupport:0,until:[0,4],updat:[2,4],upset:1,url:0,usag:[1,2],use:[0,1,2,3,4],use_dynamic_check:0,use_gpuverifi:0,use_shim:0,used:[0,1,4],useful:0,user:[0,2,4],usererror:0,usernam:1,uses:4,using:[0,1,2,3,4],utf:0,util:0,valid:[0,1,4],valu:[0,1],variabl:[0,1],vector:0,vector_width:0,vectori:0,verbatim:4,verbos:[0,1],verif:0,verifi:[0,2],verify_bytecode_featur:0,version:[0,1,2,4],version_meta_match:0,view:4,violat:4,visibl:4,visit:0,vocab:0,vocaberror:0,vocabulari:[0,1],vocabularli:0,volum:[2,4],wai:4,waiv:4,waiver:4,wang:1,want:[1,4],warn:0,warranti:4,well:4,were:4,wget:2,wgsize:0,what:4,whatev:4,when:[2,3,4],where:[0,1,4],whether:[0,4],which:[0,1,2,4],whitespac:0,who:4,whole:4,whom:4,whose:4,wide:4,width:0,window:4,wipo:4,wish:4,within:4,without:[0,2,4],work:[0,4],worker:0,workgroup:0,worldwid:4,would:4,wrap:0,write:4,written:4,year:4,you:[2,3,4],your:[1,2,4],yourself:4,zero:0,zlib:2},titles:["Python API","Command Line Interface","Requirements","Building the Development Version","License"],titleterms:{api:0,atom:[0,1],build:3,cldrive:[0,1],clgen:[0,1],cli:0,clsmith:1,clutil:0,command:1,condit:4,config:0,content:2,corpu:0,creat:1,dbutil:0,develop:3,dump:1,explor:[0,1],featur:[0,1],fetch:[0,1],github:1,indic:2,instal:[2,3],interfac:1,licens:4,line:1,log:0,merg:1,model:0,nativ:0,preambl:4,preprocess:[0,1],python:0,requir:2,sampler:0,system:[2,3],tabl:2,term:4,train:1,verifi:1,version:3,virtualenv:[2,3],wide:[2,3]}})