
const STORK_DEFAULT_SETTING = {
        startWith : "[",
        splitBy : ",",
        endWith : "]",
        area : ".edit-area"
    }
function Stork( area, editor ){
    
    this.area = $( area )
    this.editor = $( editor )
    this.setting = $.extend({}, STORK_DEFAULT_SETTING)

    this.TextToInput = function(){
        var inputName
        var inputValue
        var input
        var target
        var type
        var checked 
        this.area.find('[data-editor-for]').each( ( index, element ) => {
            inputName = $(element).data('editor-for');
            inputValue = $(element).text();
            input = this.editor.find("[name='"+ inputName + "']")
            if( inputName.endsWith("[]") ){
                inputValue = inputValue.slice(1,-1).split( this.setting.splitBy )
            }
            
            for( var i = 0,leng = $(input).length; i < leng; i ++ ){
                target = $(input).get(i) 
                type = $( target ).attr("type") 
                switch( type ){
                    case "checkbox":
                    case "radio":

                        if( Array.isArray( inputValue ) ){
                            checked =  inputValue.includes( $(target).val() )
                        }else{
                            checked = $(target).val() == inputValue
                        }
                        
                        $( target ).prop("checked", checked );
                        
                        break
                    default:
                        $( target ).val(inputValue);
                }
            }
            
        })
    }
    this.InputToText = function(){
        var inputName 
        var input 
        var length 
        var text 
        var value 
        var target
        var type

        this.area.find('[data-editor-for]').each( ( index, element )=>{

            inputName = $(element).data('editor-for');
            input = this.editor.find("[name='"+ inputName + "']")
            length = $(input).length
            text = ""
            value = []

            for( var i = 0 ; i < length; i ++ ){
                target = $(input).get(i) 
                type = $( target ).attr("type")
                switch( type ){
                    case "checkbox":
                    case "radio":
                        if( $(target).is(":checked")  ){
                            value.push( $( target ).val() );
                        }
                        break
                    default:
                        value.push( $( target ).val() );
                }
            }
            text = value.toString().replace(",", this.setting.splitBy)
            if( inputName.endsWith("[]") ){
                text = this.setting.startWith + text + this.setting.endWith
            }
            $( element ).text( text );
        })
    }
}


(function($){
    $.fn.stork = function( setting ){
        var msetting = Object.assign({}, STORK_DEFAULT_SETTING, setting )
        area = $(this).parents( msetting.area )
        id = $(this).data('editor');
        var stork = new Stork( area, id )
        stork.setting = msetting
        return stork
    }
}(jQuery))

