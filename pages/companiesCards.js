import React, {useState,useEffect} from 'react'
import Layout from '../components/Layout'
import CompanyCard from '../components/CompanyCard'

import { categories,subcategories } from '../utils/categoriesAndSubcategories';

export default function companiesCards({data}) {
    
    const newData = data.values.filter((company,index)=> company.logo !==null)
    const [loading,setLoading]=useState(false)
    
    const [liveData,setLiveData]=useState( [] || newData);
    const [sorted,setSorted]=useState(false)
    const [selectedCategory,setSelectedCategory]=useState("All")
    const [selectedSubcategory,setSelectedSubcategory]=useState("All")
    




   useEffect(()=>{

    if(sorted){ 
        liveData.sort((b, a) => a.name > b.name && 1 || -1) 
    } else {
        liveData.sort((a, b) => a.name > b.name && 1 || -1)
    }
   

    const handleFilter = () => {
        
        
        if(selectedSubcategory === "All" && selectedCategory === "All"){
            setLoading(true)
            setLiveData(data.values)
        
            setLoading(false)
        }

        if (selectedCategory !=="All" && selectedSubcategory === "All"){
            setLoading(true)
            const result =  data.values.filter(
                (company, index) =>
                company.parentCategorySlug.includes(
                    selectedCategory) &&
                company.subcategory
            );
            setLiveData(result)
            setLoading(false)
        }

        if (selectedCategory !=="All" && selectedSubcategory !== "All"){
            setLoading(true)
            const result =  data.values.filter(
                (company, index) =>
                company.parentCategorySlug.includes(
                    selectedCategory) &&
                company.subcategory.includes(selectedSubcategory)
            );
            setLiveData(result)
            setLoading(false)
        }

    /*     const result =  data.values.filter(
            (company, index) =>
            company.parentCategorySlug.includes(
                selectedCategory) &&
            company.subcategory.includes(selectedSubcategory) 
        );
    
        if(selectedCategory === "All" && selectedSubcategory === "All"){
        setLiveData(data.values)
        console.log("la data a usar es data.values")
        } else {
            console.log("la data a usar es result")
        setLiveData(result)
        } */
        
       console.log(sorted)
 
        
    }
    handleFilter()
   },[selectedCategory,selectedSubcategory,sorted,liveData])
 

    return (
        <Layout>
        <section className="filter bg-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    <select className="form-select" ariaLabel="Default select example" onChange={e => setSelectedCategory(e.target.value)} >
                        <option selected>Select a Category</option>
                        <option value="All">All</option>
                
                        {categories?categories.map((category,index)=>{
                            return (
                                <option value={category} >{category}</option>
                            )   
                        }):""}
                    </select>
                    </div>
                    <div className="col-md-5">
                    <select className="form-select" ariaLabel="Default select example" onChange={e => setSelectedSubcategory(e.target.value)}>
                        <option >Select a subcategory</option>
                        <option value="All">All</option>
                        {subcategories?subcategories.map((subcategory,index)=>{
                            return (
                                <option value={subcategory}>{subcategory}</option>
                            )   
                        }):""}
                    </select>
                    </div> {/* subcategory */}
                    <div className="col-md-2 d-flex justify-content-end align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={sorted} id="flexCheckDefault" onClick={()=>setSorted(!sorted)}/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Sort
                        </label>
                        </div> {/* form check */}
                        </div> 
                </div>
                {loading && "Loading"}
            </div> {/* container */}
        </section>

        <section className="cards my-5">
            <div className="container">
                <div className="card-container">
                    {liveData?liveData.map((company,index)=>{
                        return (
                            <CompanyCard company={company} index={index}/>
                        )
                    }):"Loading data..."}
                </div>
            </div>
        </section>

            
        </Layout>
    )
}


export async function getServerSideProps(context) {

    const res = await fetch(`https://apidaysserver-svmwd.ondigitalocean.app` || `http://localhost:5000`);
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { data },
    };
  }