import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// প্রপস হিসেবে isOpen এবং setIsOpen নিচ্ছি
export const AlertDialogshow = ({ isOpen, setIsOpen }) => {
    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
            {/* এখানে কোনো Trigger থাকবে না */}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <img src="https://images.6223027.com/mcs-images/announcement/we999bdtf5/1760690400041_22222.png" className="w-full"/>
                    <AlertDialogTitle className='text-center text-white mt-4'>আপনার অ্যাকাউন্টে পর্যাপ্ত ব্যালেন্স নেই। খেলা চালিয়ে যেতে এখনই ডিপোজিট করুন।</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setIsOpen(false)} className="bg-amber-400">বুজেছি</AlertDialogCancel>
                  
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}