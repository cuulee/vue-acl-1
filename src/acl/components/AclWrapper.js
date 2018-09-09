export default {
    name: "aclparser",
    data: () => ({
        slot: 'default'
    }),
    props: {
        el: {
            type: String,
            default: 'div'
        },
        role: {
            type: [String,Array],
            default: 'guest'
        },
        deny: {
            type: [String,Array],
            default: '*'
        },
        allow: {
            type: [String, Array],
            default: 'admin'
        }
    },
    watch: {
        slot: {
            handler: 'checkPermission',
            immediate: true
        },
        role: 'checkPermission',
        deny: 'checkPermission',
        allow: 'checkPermission',
    },
    methods: {
        checkPermission(){

            if( this.convert( this.role, this.allow ) ){
                this.slot = 'default'
            }
            else if( this.convert(this.role,this.deny) ){
                this.slot = 'deny'
            }

        },
        convert(role,permission){

            if(permission === "*")
                return true

            if(permission instanceof Array){
                if(permission.indexOf(role) > -1)
                    return false

                return false
            }

            return role === permission
        }
    },
    render(create){
        return create(
            this.el,
            this.$slots[this.slot]
        )
    }

}