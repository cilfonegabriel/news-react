import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material"

const CATEGORIES = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
]

const Form = () => {
  return (
    <form action="">
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
                label = "Category"
            >
                {CATEGORIES.map(category => (
                    <MenuItem
                        key={category.value}
                        value={category.value}
                    >
                        {category.label}
                    </MenuItem>
                ))}

            </Select>

            <Box sx={{marginTop: 2}}>
                <Button
                    fullWidth
                    variant = "contained"
                    color="primary"
                >
                    Search News
                </Button>
            </Box>


        </FormControl>
    </form>
  )
}

export default Form
